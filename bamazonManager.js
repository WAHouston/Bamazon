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
    menu()
})

function menu() {
    let choices = ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    inquirer
        .prompt([
            {
                type: "list",
                name: "mode",
                message: "Please select an operation:",
                choices: choices
            }
        ])
        .then(function(res){
            if (res.mode === choices[0]) {
                viewProducts()
            } else if (res.mode === choices[1]) {
                viewLowInventory()
            } else if (res.mode === choices[2]) {
                addToInventory()
            } else if (res.mode === choices[3]) {
                addNewItem()
            }
        })
}

function viewProducts() {
    connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function(err, res){
        if (err) throw err
        console.log()
        console.table(res)
        connection.end()
    })
}

function viewLowInventory() {
    connection.query('SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity < 5', function(err, res){
        if (err) throw err
        console.log()
        console.table(res)
    })
}

function addToInventory() {
    connection.query('SELECT item_id, product_name, stock_quantity FROM products', function(err, data){
        if (err) throw err
        console.table(data)
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "addition",
                    message: "What is the ID number of the item that you wish to add to?",
                    validate: function(input){
                        if (isNaN(input) || input < 1 || input > data.length){
                            return "\nThat is not a valid product ID."
                        } else {
                            return true
                        }
                    }
                },
                {
                    type: "input",
                    name: "additionAmount",
                    message: "How many would you like to add?",
                    validate: function(input){
                        if (isNaN(input) || input < 1){
                            return "\nThat is not a valid amount."
                        } else {
                            return true
                        }
                    }
                }
            ])
            .then(function(res){
                connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [(data[0].stock_quantity + parseInt(res.additionAmount)), parseInt(res.addition)], function(err){
                    if (err) throw err
                    connection.query('SELECT item_id, product_name, stock_quantity FROM products', function(err, data){
                        if (err) throw err
                        console.log("\nStock updated!\n")
                        console.table(data)
                        connection.end()
                    })
                })
            })
    })   
}

function addNewItem() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "product",
                message: "What is the name of the product you would like to add?"
            },
            {
                type: "input",
                name: "department",
                message: "Which department does this product belong to?"
            },
            {
                type: "input",
                name: "price",
                message: "What is the price of this product?",
                validate: function(input){
                    if (isNaN(input) || input <= 0){
                        return "\nThat is not a valid price."
                    } else {
                        return true
                    }
                }
            },
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to add?",
                validate: function(input){
                    if (isNaN(input) || input <= 0){
                        return "\nThat is not a valid price."
                    } else {
                        return true
                    }
                }
            }
        ])
        .then(function(res){
            let newProduct = {
                product_name: res.product,
                department_name: res.department,
                price: res.price,
                stock_quantity: res.quantity
            }
            connection.query('INSERT INTO products SET ?', newProduct, function (err, res){
                if (err) throw err
                connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function (err, res){
                    if (err) throw err
                    console.log("\nProduct added!\n")
                    console.table(res)
                    connection.end()
                })
            })
        })
}