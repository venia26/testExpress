var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'venia26',
  password : 'venia_26',
  database : 'general'
});

var Users = {
	name: 'Venia',
	lastName: 'Konovalov'
};

connection.connect();

console.log("Connected to Mysql");

var sql = 'INSERT INTO users SET ?';

var query = connection.query(sql, Users, function(err, result) {
 	if (err) throw err;
	console.log('SUCCESFULL!!!');
	//console.log(result);
});
	
connection.end();