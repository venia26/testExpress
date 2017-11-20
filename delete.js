var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'venia26',
  password : 'venia_26',
  database : 'general'
});

var deliteName = "Venia";

connection.connect();
 
console.log("Connected to Mysql");
 
var sql = "DELETE from users WHERE name = ?";
 
var query = connection.query(sql, deliteName, function(err, result) {
    console.log("Record Deleted!!");
    //console.log(result);
});
 
connection.end();