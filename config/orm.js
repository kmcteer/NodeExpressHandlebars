// inputting mysql connection
var connection = require('./connection');

// (objects)    orm.all will collect all data from the database.. creating a connection query thats selecting everything from what ever the table inout (what i put in the method), then use a callback  to take the result into the next  file in the file system (contained in models folder)
    var orm = {
        all: function(tableInput, cb){
            connection.query('SELECT * FROM '+tableInput+';', function(err,res){
                if(err) throw err;
                cb(result)
            })
        }
    }
// orm.create will create new data within the database

//  orm.update will update data within the database