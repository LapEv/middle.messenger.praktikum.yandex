const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const exphbs = require('express-handlebars');

const PORT = 3000;

app.engine(
  'hbs',
  exphbs.engine({
    layoutsDir: path.join(__dirname, '/src/layouts'),
    defaultLayout: 'auth',
    extname: 'hbs',
    partialsDir: [path.join(__dirname, '/src/partials')],
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/pages/'));
// exphbs.registerPartials(path.join(__dirname, '/src/partials/'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/index', (req, res) => {
  res.render('index.hbs');
});

app.get('/registration', (req, res) => {
  res.render('registration.hbs');
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

module.exports = app;
