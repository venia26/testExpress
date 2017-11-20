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

var sql = 'SELECT * FROM users';

var query = connection.query(sql, function(error, row, fields){
	if (error) throw err;
   // console.log(row);
});
	
connection.end();