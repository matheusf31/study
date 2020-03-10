const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', db.getUsers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
