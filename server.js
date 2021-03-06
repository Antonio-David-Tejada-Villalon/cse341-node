const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});