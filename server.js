const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');


const app = express();

require('dotenv').config();

app.use(logger('dev'));
// body parser middleware - adds properties to req.body
app.use(express.json());
// Configure both serve-favicon & static
// middleware to server from the 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

