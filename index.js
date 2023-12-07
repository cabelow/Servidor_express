const express = require('express')

const PORT = 21144

const app = express();

app.get('/', (req, res) => {
    console.log("Servidor para o projeto, testado e aprovado !")
    res.send('Servidor para o projeto, testado e aprovado !')
})

app.listen(PORT)