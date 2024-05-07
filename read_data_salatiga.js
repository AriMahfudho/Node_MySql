var db = require("./db_config");

var sql = "SELECT id, name,address FROM member WHERE address LIKE '%Salatiga';";

db.query(sql, function(err, result) {
    if (err) throw err;
    //gunakan perulangan utnuk menampilkan data
    console.log(` ID \t NAME \t\t ADDRESS`);
    console.log(` _______________________________________________`);
    result.forEach((mbr) => {
        console.log(` ${mbr.id} \t ${mbr.name} \t ${mbr.address}`);
    });
});