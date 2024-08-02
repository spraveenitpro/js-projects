const router = require("express").Router();


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

router.post("/register", (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(200).json({ message: "Hello World!" });
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

module.exports = router;