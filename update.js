var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'venia26',
  password : 'venia_26',
  database : 'general'
});

var User = {
	name: 'Venya',
	lastName: 'Konovalov'
};
var update = "Venia";

connection.connect();

console.log("Connected to Mysql");

var sql = "UPDATE users SET name = '"+User.name+"' WHERE name = ?";

var query = connection.query(sql, update, function(err, result) {
  if (err) throw err;
  console.log('Updating!!!');
 //console.log(result);
});
	
connection.end();