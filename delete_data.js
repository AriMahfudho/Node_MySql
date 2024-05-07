var db = require("./db_config");

var sql = `DELETE FROM member WHERE id = 2 `;

db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
});