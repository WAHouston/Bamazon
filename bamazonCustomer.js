const mysql = require("mysql")
const inquirer = require("inquirer")
require("console.table")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack)
        return
    }
    listProducts()
})

function listProducts() {
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
        if (err) throw err
        console.log()
        console.table(res)
        inquire(res.length)
    })
}

function inquire(numOfItems){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the ID number of the product you wish to purchase?",
                name: "productID",
                validate: function(input){
                    if (isNaN(input) || input < 1 || input > numOfItems){
                        return "\nThat is not a valid product ID."
                    } else {
                        return true
                    }
                }
            },
            {
                type: "input",
                message: "How many would you like to purchase?",
                name: "productQuantity",
                validate: function(input){
                    if (isNaN(input) || input < 1){
                        return "\nThat is not a valid quantity."
                    } else {
                        return true
                    }
                }
            }
        ])
        .then(function(res){
            transactionCheck(res.productID, res.productQuantity)
        })

}

function transactionCheck(id, quantity){
    connection.query('SELECT stock_quantity, price FROM products WHERE ?', {item_id: id}, function(err, res){
        if (err) throw err
        if (quantity <= res[0].stock_quantity){
            completeTransaction(id, quantity, res[0].stock_quantity, res[0].price)
        } else {
            console.log("\nThere is not enough stock to complete this transaction.\n")
            listProducts()
        }
    })
}

function completeTransaction(id, quantity, stock, price){
    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [(stock - quantity), id])
    console.log("\nYour total is: $" + (quantity * price) + "\nTransaction Complete!")
    listProducts()
}