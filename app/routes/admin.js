const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}))

router.get("/add-products",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'add-products.html'))
});

router.post("/products",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/users')
});

module.exports = router