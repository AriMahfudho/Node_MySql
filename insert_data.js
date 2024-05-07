var db = require("./db_config");

var sql = `INSERT INTO agents ( AGENT_CODE, AGENT_NAME, WORKING_AREA, COMMISSION, PHONE_NO) VALUES 
('A020', 'Ari','Salatiga',0.14,'089510660017') `;
db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});