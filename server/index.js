const express = require('express');
const path = require('path');
var logger = require('morgan');

const port = 3000;
const app = express();

app.use(logger('default'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
