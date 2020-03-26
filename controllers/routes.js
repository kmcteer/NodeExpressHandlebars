// need an reference to express
var express = require('express');

// need an reference to express.router
var router = express.Router();
// make a reference to burger.js file 
var burger = require('../models/burger');

router.get('/', function(req,res){
    // call burger.all and pass burger data into function
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index');

    })
})

module.exports = router;




