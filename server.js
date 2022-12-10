const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/pages/'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

module.exports = app;
