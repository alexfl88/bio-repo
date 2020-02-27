const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'playlist_DB'
});
connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.query("SELECT * from products", function(err, res) {
        console.log('res', res);
    })
})