var db = require("./db_config");

var sql = "SELECT * FROM member";

db.query(sql, function(err, result) {
    if (err) throw err;
    //gunakan perulangan utnuk menampilkan data
    console.log(` ID \t NAME \t\t ADDRESS`);
    console.log(` _______________________________________________`);
    result.forEach((mbr) => {
        console.log(` ${mbr.id} \t ${mbr.name} \t ${mbr.address}`);
    });
});