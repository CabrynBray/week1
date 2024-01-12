const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/', require('./routes'));

app.listen(8080, () => {console.log(`Running on Port ${8080}`)});
