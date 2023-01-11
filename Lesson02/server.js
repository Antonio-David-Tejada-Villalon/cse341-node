const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Running on port ${port}`);
    }
});