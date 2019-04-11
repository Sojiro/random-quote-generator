const app = require('express')();

const Quotes = require('../data/quotes');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.setHeader('access-control-allow-origin', '*');
  res.send(Quotes[Math.floor(Math.random() * Quotes.length)]);
});

app.listen(PORT, () => console.log(`App is running at ${PORT}`));
