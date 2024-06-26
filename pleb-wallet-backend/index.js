const express = require("express");
const usersRouter = require("./routers/usersRouter");
const lightningRouter = require("./routers/lightningRouter");

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");


const server = express();

server.use(helmet());
server.use(morgan("common"));
server.use(cors());

server.use(
	rateLimit({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // limit each IP to 100 requests per windowMs
	})
);

server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).json({ message: "I'm alive!" });
});

server.use("/users", usersRouter);
server.use("/lightning", lightningRouter);

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
