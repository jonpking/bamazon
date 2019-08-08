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
    console.table(res);
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
        // console.log(res[0].item_id);
        connection.query("SELECT stock_quantity FROM products WHERE ?",
            {
                item_id: results.itemId
            }, function (err2, res2) {
                if (err2) throw err2;
                // console.table(response);
                if (res2[0].stock_quantity <= 0) {
                    console.log("Not enough stock to process order\n");
                } else {
                    console.log("Processing your order now...\n");
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: (res2[0].stock_quantity - results.itemQuantity)
                            },
                            {
                                item_id: results.itemId
                            }
                        ], function (err3, res3) {
                            if (err3) throw err3;
                            console.log("Order processed successfully\n");
                            //print total cost of order
                        });
                }
            });
    });
});
