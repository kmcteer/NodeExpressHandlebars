// this page is going to house all of the mysql data

var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'burgers_db'
})

connection.connection(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});
// exports connection
module.exports = connection;