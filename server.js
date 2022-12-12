const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const changePasswordData = require('./src/data/changePasswordData');
const data = require('./src/data/data');
const error = require('./src/data/error');
const profileData = require('./src/data/profileData');
const route = require('./src/data/routeForNode');
const chatMessages = require('./src/data/chatMessages');

app.engine(
  'hbs',
  exphbs.engine({
    layoutsDir: path.join(__dirname, '/src/layouts'),
    defaultLayout: 'auth',
    extname: 'hbs',
    partialsDir: [path.join(__dirname, '/src/components')],
  })
);
app.use(express.static(__dirname + '/src/'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/pages/'));

app.get('/', (req, res) => {
  res.render('index.hbs', route);
});

app.get(route.route.index, (req, res) => {
  res.render('index.hbs', route);
});

app.get(route.route.registration, (req, res) => {
  res.render('registration.hbs', route);
});

app.get(route.route.chat, (req, res) => {
  res.render('chat.hbs', {
    data,
    chatMessages: { ...chatMessages },
    ...route,
  });
});

app.get(route.route.profile, (req, res) => {
  res.render('profile.hbs', { profileData, ...route });
});

app.get(route.route.changePassword, (req, res) => {
  res.render('profileChangePassword.hbs', { changePasswordData, ...route });
});

app.get(route.route.error, (req, res) => {
  res.render('error', { error, ...route });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

module.exports = app;
