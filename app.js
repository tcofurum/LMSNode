const express = require('express'); // require is same as import statement from java
const app = express();

app.use(express.json());

const routes = require('./src/routes/routes');
app.use('/lms/', routes); // because home screen: '/lms'

module.exports = app;