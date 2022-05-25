const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';


const port = 3052;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'mediaAlunos.db';


app.use(express.static("../frontend/"));


app.use(express.json());


/* Definição dos endpoints */
app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM escola';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close();
});


app.get('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "INSERT INTO escola (ESCOLA, ID ESCOLA) VALUES ('" + req.body.title + "', 3, false)";
	//sql = "INSERT INTO escola (ESCOLA, ID ESCOLA) VALUES ('FGV 5', 3)";
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});