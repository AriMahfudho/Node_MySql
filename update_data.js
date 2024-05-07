var db = require("./db_config");

var sql = `UPDATE member SET address = 'Jl. Kalisombo No.18, Salatiga' 
WHERE id = 1 `;
db.query(sql, function(err, result) {
    if (err) throw err;
    console.log( result.affectedRows + "record(s) updated" );
});