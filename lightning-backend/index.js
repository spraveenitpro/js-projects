
const express = require('express');
// Import new routers

const usersRouter = require("./routers/usersRouter");
const lightningRouter = require("./routers/lightningRouter");


const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
    console.log(res);
})

server.use("/users", usersRouter);
server.use("/lightning", lightningRouter);

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



