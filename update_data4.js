var db = require("./db_config");

var sql = `UPDATE member SET address = 'Indonesia' ORDER BY name DESC LIMIT 5`;

db.query(sql, function(err, result) {
    if (err) throw err;
    console.log( result.affectedRows + "record(s) updated" );
});