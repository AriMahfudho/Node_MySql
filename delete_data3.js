var db = require("./db_config");

//menghapus kolom nama yang urutannya dari atas sebanyak 2 data
var sql = `DELETE FROM member ORDER BY name DESC LIMIT 2 `;

db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
});