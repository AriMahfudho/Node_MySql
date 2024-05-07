var db = require("./db_config");

var sql = `UPDATE member SET name = 'Educa Studio', 
address = 'Jl. Gilingrejo No.10, Salatiga' WHERE id = 18 `;

db.query(sql, function(err, result) {
    if (err) throw err;
    console.log( result.affectedRows + "record(s) updated" );
});