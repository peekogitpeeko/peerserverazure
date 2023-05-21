// const express = require('express');
// const port = process.env.PORT || 3000
const port1 = process.env.PORT || 9000
// const cors = require('cors');
const { PeerServer } = require("peer");
const peerServer = PeerServer({ port: port1, path: "/myapp" });
// const app = express();

// app.use(cors());

// app.get('/', (req, res) => {
//     res.send({"item": "hello world shyam"});
//   });

// app.listen(port, () => {
//   console.log(`Server is running1`);
// });

