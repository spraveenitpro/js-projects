const router = require("express").Router();


// Get all users
router.get("/", (req, res) => {
	res.status(200).json({ message: "I'm alive!" });
})

// Get users by name
router.get("/user", (req, res) => {
	res.status(200).json({ message: "I'm alive!" });
})



// POST a user to register
router.post("/register", (req, res) => {
	const user = req.body;

	console.log(user);

	res.status(201).json({ message: "I'm alive!" });
});

// POST a user to login
router.post("/login", (req, res) => {
	const user = req.body;

	console.log(user);

	res.status(200).json({ message: "I'm alive!" });
});

// PUT a user to update them by their id
router.put("/:id", (req, res) => {
	const id = req.params.id;

	const user = req.body;

	console.log(id, user);

	res.status(200).json({ message: "I'm alive!" });
});

// DELETE a user by their id
router.delete("/:id", (req, res) => {
	const id = req.params.id;

	console.log(id)

	res.status(200).json({ message: "I'm alive!" });
});

// export our router so we can initiate it in index.js
module.exports = router;
