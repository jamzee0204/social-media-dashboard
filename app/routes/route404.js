const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}))

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views', 'pageNotFound.html'))
});

module.exports = router