const router = require("express").Router();

// GET lightning wallet balance
router.get("/balance", (req, res) => {
	res.status(200).json({ message: "I'm alive!" });
});

// GET all invoices from the database
router.get("/invoices", (req, res) => {
	res.status(200).json({ message: "I'm alive!" });
});

// POST required info to create an invoice
router.post("/invoice", (req, res) => {
	const { value, memo } = req.body;

	console.log(value, memo);

	res.status(200).json({ message: "I'm alive!" });
});

// POST an invoice to pay
router.post("/pay", (req, res) => {
	const { payment_request } = req.body;

	console.log(payment_request);

	res.status(200).json({ message: "I'm alive!" });
});

// export our router so we can initiate it in index.js
module.exports = router;
