const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const app = express();
const port = process.env.PORT || 3000;

app
.use(bodyParser.json())
.use((req, res, next) => {
  console.log(req.body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use('/', require('./routes'));

mongodb.initDb((err) => {
  if(err) {
      console.log(err);
  } else {
      app.listen(port);
      console.log(`this is running on port ${port}`);
  }
});