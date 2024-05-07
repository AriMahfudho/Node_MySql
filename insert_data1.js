var db = require("./db_config");

var sql = `INSERT INTO member (id, name, address) VALUES 
( 2, 'Muhammad','Semarang'),
( 3, 'Ari','Demak'),
(4, 'Mahfudho', 'Solo') `;;
db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});