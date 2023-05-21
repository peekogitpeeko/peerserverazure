const express = require('express');
const cors = require('cors');
const { PeerServer } = require("peer");
const peerServer = PeerServer({ port: 9000, path: "/myapp" });
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

const port = 3000; // Choose a port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});