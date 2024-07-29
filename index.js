import mysql from 'mysql';


const conexaoBanco = mysql.createConnection({
  host: "srv1082.hstgr.io",
  user: "u969740184_app_passos",
  password: "#Eletronica#8597",
  database: "u969740184_app_passos"
});

conexaoBanco.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');
});


var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
conexaoBanco.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});

conexaoBanco.query("SELECT * FROM customers", function (err, result, fields) {
  if (err) throw err;
  console.log(JSON.parse(result));
});
