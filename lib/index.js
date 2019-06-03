const app = require('express')();
const bodyParser = require('body-parser');
const fs = require('fs');

const Quotes = require('../data/quotes');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.setHeader('access-control-allow-origin', '*');
  res.send(Quotes[Math.floor(Math.random() * Quotes.length)]);
});

app.get('/add', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
  Quotes.push(req.body);
  fs.writeFile(
    `${__dirname}/../data/quotes.js`,
    JSON.stringify(Quotes, null, 4),
    (err) => {
      if (err) res.sendStatus(500);
      res.sendStatus(201);
    }
  );
});

app.listen(PORT, () =>
  console.log(`App is running at http://localhost:${PORT}`)
);
