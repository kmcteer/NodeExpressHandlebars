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
        res.render('index',{burger_data});

    })
})
// router.put needed.. this is used for clicking the button and allowing the burger to dissapear.
router.put('/burgers/update',function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
    res.redirect('/');
})
})
module.exports = router;




