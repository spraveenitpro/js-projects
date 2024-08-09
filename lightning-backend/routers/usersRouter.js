const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



// GET all users

router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
})

// GET user by username

router.get("/:username", (req, res) => {
    const id = req.params.username;
    console.log(id);
    res.status(200).json({ message: "Hello World!" });
})

// POST a user to register

router.post("/register", (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(201).json({ message: "Hello World!" });
})

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