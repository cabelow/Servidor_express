const express = require('express')

const PORT = 21144
const HOST = '0.0.0.0'

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor para o projeto')
})

app.listen(PORT, HOST)