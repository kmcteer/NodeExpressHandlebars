// inputting mysql connection
var connection = require('./connection');

// (objects)    orm.all will collect all data from the database.. creating a connection query thats selecting everything from what ever the table inout (what i put in the method), then use a callback  to take the result into the next  file in the file system (contained in models folder)
    var orm = {
        all: function(tableInput, cb){
            connection.query('SELECT * FROM '+tableInput+';', function(err,res){
                if(err) throw err;
                cb(result)
            })
        },
        // update table input. set devour=true makes the id equal to what were sending to orutes.js
        update: function(tableInput, condition, cb){
            connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
                if(err)throw err;
                cb(result);
            })
        },
        // used to create a connection query that will insert values into the table input. 
        create: function(tableInput,val,cb){
            connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ("+val+");", function(err,result){
                if(err)throw err;
                cb(result);
            })
        }
    }
// orm.create will create new data within the database
module.exports = orm;
//  orm.update will update data within the database