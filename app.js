const sqlite3 = require('sqlite3').verbose();

//connecting to the database
const db = new sqlite3.Database('./text.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) return console.error(err.message);
});

//create table
// let sql = `CREATE TABLE users(id INTEGER PRIMARY KEY ,first_name,last_name,username,password,email)`;
// db.run(sql);

//drop table
// db.run('DROP TABLE users');

//insert data into table
// let sql = `INSERT INTO users(first_name,last_name,username,password,email) VALUES (?,?,?,?,?)`;
// db.run(
// 	sql,
// 	['kinan12', 'mh12', 'user12', 'test12', 'test12@gmail.com'],
// 	(err) => {
// 		if (err) return console.error(err.message);
// 	}
// );

//update data
// let sql1 = `UPDATE users SET first_name=? WHERE id =?`;
// db.run(sql1, ['kin', 1], (err) => {
// 	if (err) return console.error(err.message);
// });

//DELETE data
let sql1 = `DELETE FROM users WHERE id =?`;
db.run(sql1, [1], (err) => {
	if (err) return console.error(err.message);
});

//query the data
// let sql = `SELECT * FROM users`;
// db.all(sql, [], (err, rows) => {
// 	if (err) return console.error(err.message);
// 	rows.forEach((row) => {
// 		console.log(row);
// 	});
// });

//A Single Row
let sql = `SELECT * FROM users WHERE id =?`;
db.get(sql, [2], (err, row) => {
	if (err) return console.error(err.message);

	console.log(row);
});

// db.each
// is the same as db.all but with WHERE condition
