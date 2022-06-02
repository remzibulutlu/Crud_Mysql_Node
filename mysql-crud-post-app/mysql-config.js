const mysql = require('mysql');
const mysqlConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud'
});
mysqlConn.connect(function (err) {
  if (err) {
    res.send(err);
  } else {
    console.log("PhpMyadmin is connected");
  }
});
module.exports = mysqlConn;