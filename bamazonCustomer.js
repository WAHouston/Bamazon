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
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err
        console.table(res)
        inquire()
    })
}

function inquire(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the ID number of the product you wish to purchase?",
                name: "productID",
                validate: function(input){
                    if (isNaN(input)){
                        return "That is not a valid product ID."
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
                    if (isNaN(input)){
                        return "That is not a valid quantity."
                    } else {
                        return true
                    }
                }
            }
        ])
        .then(function(res){
            
        })

}