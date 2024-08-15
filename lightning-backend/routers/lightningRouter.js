
const router = require("express").Router();
const authenticate = require("../routers/middleware/authenticate");
const authenticateAdmin = require("../routers/middleware/authenticateAdmin");
const {
	getBalance,
	createInvoice,
	getChannelBalance,
	payInvoice,
} = require("../lnd.js");


// GET the onchain balance

router.get("/balance", (req, res) => {
	getBalance()
		.then((balance) => {
			res.status(200).json(balance);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// GET the lightning wallet balance
router.get("/channelbalance", (req, res) => {
	getChannelBalance()
		.then((channelBalance) => {
			res.status(200).json(channelBalance);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});




// GET all invoices from database

router.get("/invoices", (req, res) => {
	res.status(200).json({ message: "Hello World!" });
});

// POST required info to create an invoice
router.post("/invoice", authenticate, (req, res) => {
	const { value, memo } = req.body;

	createInvoice({ value, memo })
		.then((invoice) => {
			res.status(200).json(invoice);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});


// POST an invoice to pay
router.post("/pay", authenticateAdmin, async (req, res) => {
	const { payment_request } = req.body;

	const pay = await payInvoice({ payment_request });

	if (pay.payment_error) {
		res.status(500).json(pay.payment_error);
	}

	if (pay?.payment_route) {
		// Save to DB

		res.status(200).json(pay);
	}
});




module.exports = router;

