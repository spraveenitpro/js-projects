
const express = require('express');
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
    console.log(res);
})

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});