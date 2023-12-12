const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    console.log("Sistema")
    return res.send("Sistema")
});

router.get('/', (req, res)=>{
    console.log("Sistema")
    return res.send("Sistema")
});

module.exports = router
