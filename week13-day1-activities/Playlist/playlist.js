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
    connection.query("SELECT * from playlist", function(err, res) {
        console.log('results', results);
    });

    connection.query('SELECT * from `playlist` WHERE `artist` = "Coldplay"', (err, results) => {
       console.log('Coldplay only: ', results);
    });

    connection.query("INSERT INTO 'playlist' SET ?", {
        artist: "Coldplay",
        title: "Adventure of a Lifetime",
        genre: "Alt",
    }, (err, res) => {
        if (err) throw err;
    })
});

