const express = require('express');
const routes  =  require('./src/routes.js');

const PORT = 21009;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT)