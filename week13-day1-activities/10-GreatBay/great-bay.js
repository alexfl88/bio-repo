const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'auction_db'
});

const postItem = () => {
    inquirer.prompt([{
        name: "category",
        message: "What type of item are you listing?"
    }, {
        name: "itemName",
        type: "input",
        message: "Item name?"
    }, {
        name: "price",
        message: "How much are you putting this item up for?"
    }]).then(answer => {
        connection.query("SELECT * FROM bids", (err, response) => {
            if (err) 
        })
    })
}

const bidItem = () => {

}