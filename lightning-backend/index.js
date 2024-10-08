const dotenv = require("dotenv");
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const ratelimit = require('express-rate-limit');
const { connect } = require("./lnd");

// Import new routers

dotenv.config()
const usersRouter = require("./routers/usersRouter");
const lightningRouter = require("./routers/lightningRouter");

const PORT = process.env.PORT || 5500;



const server = express();

server.use(helmet());

server.use(morgan("common"))

server.use(cors());

server.use(
    ratelimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    })
);



server.use(express.json());
connect();

server.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
    //console.log(res);
})

server.use("/users", usersRouter);
server.use("/lightning", lightningRouter);


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



