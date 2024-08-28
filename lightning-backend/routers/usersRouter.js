const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// add imports for the user model and our two auth middlewares
const User = require("../db/models/user");
const authenticate = require("./middleware/authenticate.js");
const authenticateAdmin = require("./middleware/authenticateAdmin.js");




// GET all users
// Before processing the request, we apply the 'authenticateAdmin' middleware to protect the ability to see all users
router.get("/", authenticateAdmin, (req, res) => {
	// Call the 'findAll' method from our User model. This method retrieves all user records from the database.
	User.findAll()
		.then((users) => {
			// If the promise resolves (i.e., the operation was successful), we send back a response with a status of 200 (OK)
			// and the list of users retrieved from the database.
			res.status(200).json(users);
		})
		.catch((err) => {
			// If the promise is rejected (i.e., the operation fails), we send back a response with a status of 500 (Internal Server Error)
			// and the error that occurred. This might be due to a database issue, a network issue, etc.
			res.status(500).json(err);
		});
});




// GET user by username
// Using 'authenticate' middleware to verify the client's authentication token.
router.get("/user", authenticate, async (req, res) => {
	// Get the JWT (JSON Web Token) from the 'authorization' header of the request.
	const token = req.headers.authorization;
	// Retrieve the secret key for JWT verification from environment variables.
	const secret = process.env.JWT_SECRET;

	// Use the 'verify' method from the 'jsonwebtoken' library to decode the token.
	jwt.verify(token, secret, (err, decodedToken) => {
		// If an error occurred during token decoding (perhaps because the token is invalid or the secret is incorrect),
		// respond with a status of 401 (Unauthorized) and a message about the error.
		if (err) {
			res.status(401).json({ message: "Error decoding token", Error: err });
		}

		// If the token was successfully decoded, find a user with a username that matches the username in the decoded token.
		User.findByUsername(decodedToken.username)
			.then((user) => {
				// If the promise resolves (i.e., the user was found), respond with a status of 200 (OK) and the user's data.
				console.log(user);
				res.status(200).json(user);
			})
			.catch((err) => {
				// If the promise is rejected (i.e., an error occurred), respond with a status of 500 (Internal Server Error) and the error.
				res.status(500).json(err);
			});
	});
});


// POST a user to register

// POST a user to register
router.post("/register", (req, res) => {
	// We are using the bcrypt library to hash the password provided in the request body.
	// This enhances security by ensuring that the plain text password isn't stored directly in the database.
	// The '14' here is the cost factor that determines the complexity of the hashing process.
	const hash = bcrypt.hashSync(req.body.password, 14);

	// We then replace the plain text password in the request body with the hashed password.
	req.body.password = hash;

	// The updated request body (which now includes the hashed password) is passed to the 'add' method from our User model.
	// This method will create a new user record in the database.
	User.create(req.body)
		.then((user) => {
			// If the promise resolves (i.e., the operation was successful), we send back a response with a status of 200 (OK) and the newly created user.
			res.status(201).json({ data: user });
		})
		.catch((err) => {
			// If the promise is rejected (i.e., the operation fails), we send back a response with a status of 500 (Internal Server Error) and the error that occurred.
			res.status(500).json({ error: err });
		});
});


// POST a user to login

// router.post("/login", (req, res) => {
//     const user = req.body;
//     console.log(user);
//     res.status(200).json({ message: "Hello World!" });
// })

router.post("/login", (req, res) => {
	const { username, password } = req.body;

	const DBuser = {
		username: "test",
		password: "pass1",
	}

	const hashedPassword = bcrypt.hashSync(DBuser.password, 14);
	// Check if the user exists and the password matches using bcrypt
	if (DBuser && bcrypt.compareSync(password, hashedPassword)) {
		// Generate a JSON Web Token (JWT) for the user
		const token = generateToken(DBuser);
		// Send a success response with the JWT and user data
		res
			.status(200)
			.json({ message: `Welcome ${DBuser.username}!`, token, DBuser });
	} else {
		// Send an error response if the credentials are invalid
		res.status(401).json({ message: "Invalid credentials" });
	}



})

// PUT a user to update them by id

router.put("/:id", (req, res) => {
	const id = req.params.id;
	const user = req.body;
	console.log(id, user);
	res.status(200).json({ message: "Hello World!" });
})

// DELETE a user by id

router.delete("/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
	res.status(200).json({ message: "Hello World!" });
})

// function to generate JSON web token for given user

function generateToken(user) {

	// Define payload to be included in the token containing user data

	const payload = {
		id: user.id,
		username: user.username,
		admin: user.admin
	};
	// Get the JWT secret from environment variable

	const secret = process.env.JWT_SECRET || "satoshi nakamoto";

	// Define options for JWT

	const options = {
		expiresIn: "1d",
	};

	// Generate and return the JWT using payload, secret and options

	return jwt.sign(payload, secret, options);
}


module.exports = router;