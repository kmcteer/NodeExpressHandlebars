// reference orm file from orm.js
var orm = require('../config/orm');

var burger = {
    all: function(cb){
        // below call orm.all and instert burger's table input then run the function  as a callback which will be sent into our routes.js file
        orm.all('burgers',function(res){
            cb(res);
        })
    },
    // update function needed here also
    update: function(id,cb){
        orm.update('burgers',id,cb);
    },
    // call the orm create pass in the burgers table using a call back
    create: function(name,cb){
        orm.create('burgers', name, cb);
    }
}

module.exports = burger;