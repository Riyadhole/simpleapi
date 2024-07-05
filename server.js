const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let data = [];

app.post('/api/data', (req, res) => {
  const item = req.body;
  data.push(item);
  res.status(201).send(item);
});

app.get('/api/data', (req, res) => {
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
