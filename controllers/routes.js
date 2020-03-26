// need an reference to express
var express = require('express');

// need an reference to express.router
var router = express.Router();

router.get('/', function(req,res){
    res.render('index');
})

module.exports = router;




