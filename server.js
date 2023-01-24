const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.get('/*', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
