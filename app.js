const express = require('express');
const port = process.env.PORT || 3000
const cors = require('cors');
const { PeerServer } = require("peer");
const peerServer = PeerServer({ port: 9000, path: "/myapp" });
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({"item": "hello world shyam"});
  });

// const port = 3000; // Choose a port number

app.listen(port, () => {
  console.log(`Server is running1`);
});

