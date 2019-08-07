const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
});

console.log("Displaying all inventory...\n");
connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    inquirer.prompt([
        {
            type: "input",
            name: "itemId",
            message: "Enter the ID of the item you would like to purchase: "
        },
        {
            type: "input",
            name: "itemQuantity",
            message: "Enter the quantity you would like to purchase: "
        }
    ]).then(function (results) {

    });
});
