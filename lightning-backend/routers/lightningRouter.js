
const router = require("express").Router();
const authenticate = require("../routers/middleware/authenticate");

// GET lightning wallet balance

router.get("/balance", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

// GET all invoices from database

router.get("/invoices", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

// POST required info to create an invoice
router.post("/invoice", authenticate, (req, res) => {
    const { value, memo } = req.body;

    console.log(value, memo);

    res.status(200).json({ message: "I'm alive!" });
});


// POST an invoice to pay

router.post("/pay", (req, res) => {
    const { payment_request } = req.body;
    console.log(payment_request);
    res.status(200).json({ message: "Hello World" });
});

module.exports = router;

