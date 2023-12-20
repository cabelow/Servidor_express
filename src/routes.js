const express = require('express');
const UsersController = require('./controller/UsersController')

const router = express.Router();

router.get('/', (req, res)=>{
    console.log("Sistema")
    return res.send("Sistema")
});

router.get('/users', UsersController.index);

module.exports = router
