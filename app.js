const express = require('express');
const port = process.env.PORT || 3000
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({"item": "hello world shyam"});
  });

app.listen(port, () => {
  console.log(`Server is running`);
});

