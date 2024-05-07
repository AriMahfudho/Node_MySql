var db = require("./db_config");

var sql = "SELECT id, name FROM member";

db.query(sql, function(err, result) {
    if (err) throw err;
    //gunakan perulangan utnuk menampilkan data
    console.log(` ID \t NAME \t`);
    console.log(` _______________________________________________`);
    result.forEach((mbr) => {
        console.log(` ${mbr.id} \t ${mbr.name}`);
    });
});