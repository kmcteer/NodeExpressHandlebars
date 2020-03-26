// reference orm file from orm.js
var orm = require('../config/orm');

var burger = {
    all: function(cb){
        // below call orm.all and instert burger's table input then run the function  as a callback which will be sent into our routes.js file
        orm.all('burgers',function(res){
            cb(res);
        })
    }
}

module.exports = burger;