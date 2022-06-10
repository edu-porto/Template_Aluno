
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3071;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbUser.db'; 

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("../frontend/"));

app.use(express.json());

//adicionando o comando get no CRUD
//Função get pega os dados do banco e mostra na tela 
app.get('/informacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM infos ORDER BY id_info COLLATE NOCASE'
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); 
});

//Função post coloca dados no banco de dados, porém falta integrar com o frontend 

app.post('/informacoescolocar', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// insere valores de nome e tipo segundo a request enviada pelo cliente
	sql = "INSERT INTO infos (id_info, info) VALUES ('" + req.body.id_info + "', '" + req.body.info + "')";
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

//Função que atualiza os dados no banco de dados 

app.post('/informacoesatualizar', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Evita o erro de CORS

    sql = "UPDATE infos SET info = '" + req.body.info + "' WHERE id_info = " + req.body.id_info;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

//Função que deleta os dados do banco 

app.post('/informacoesdeletar', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

    sql = "DELETE FROM infos WHERE id_info = " + req.body.id_info;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

// quando o usuario entra na aba informacoes há acesso a informações adicionais sobre o curriculum
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



