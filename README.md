# Bamazon
### This is an Amazon-like storefront command line node app.
#### Usage

#### Bamazon Customer App
* When a user opens the app, they will be presented with a list of the "Bamazon" inventory products including item IDs, product names, and prices and they will be prompted to enter the item ID of the product that they wish to purchase.

![Bamazon Initial Inventory (Customer App)](images/cinitinv)

* If an invalid item ID is entered, a message will be displayed telling the user that the item ID is invalid and they will be able to try a different ID.

![Bamazon Invalid Item ID (Customer App)](images/cinvalidid)

* If a valid item ID is entered, the user will be prompted to enter a quantity that they wish to purchase.

![Bamazon Quantity Prompt (Customer App)](images/cquantityprompt)

* If an invalid quantity is entered, a message will be displayed telling the user that the quantity is invalid and they will be able to try a different quantity.

![Bamazon Invalid Quantity (Customer App)](images/cinvalidquantity)

* If quantity greater than the amount in the inventory is entered, a message will be displayed telling the user that there is not enough stock to complete the transaction and the app will be restarted.

![Bamazon Not Enough Stock (Customer App)](images/cnotenoughstock)

* If a valid quantity that is less than or equal the amount of stock is entered, the total price will be displayed along with a message telling the user that the transaction is complete.  The app will then close.

![Bamazon Transaction Complete (Customer App)](images/ctranscomp)

#### Bamazon Manager App
* When a user opens the app, they will be prompted to select an operation using the arrow keys.  The operations are: View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product.

![Bamazon Initial Prompt (Manager App)](images/minitprompt)

* If the user selects the View Products for Sale operation, a list of the available products is displayed including item IDs, product names, prices, and stock quantities and then the app is closed.

![Bamazon View Products for Sale (Manager App)](images/mviewproducts)

* If the user selects the View Low Inventory operation, a table listing products whose stock quantities are less than 5, including item IDs, product names, prices, and stock quantities and then the app is closed.

![Bamazon View Low Inventory (Manager App)](images/mviewlow)

* If the user selects the Add to Inventory operation, a list of products is displayed including item IDs, product names, and stock quantities.  The user is then prompted to enter the item ID of the product that they wish to add to.

![Bamazon Add to Inventory (Manager App)](images/madd)

* If the user enters an invalid ID, a message will be displayed telling the user that the ID was invalid and the user will be able to try a different ID.

![Bamazon Add to Inventory Invalid ID (Manager App)](images/maddinvalidid)

* If the user enters a valid ID, the user will be prompted to enter an amount that they would like to add.

![Bamazon Add to Inventory Quantity Prompt (Manager App)](images/maddquantityprompt)

* If the user enters an invalid amount, a message will be displayed telling the user that the amount was invalid and the user will be able to try a different amount.

![Bamazon Add to Inventory Invalid Quantity (Manager App)](images/maddquantityinvalid)

* If the user enters a valid ID, a message will be displayed telling the user that the stock has been updated, a table displaying the complete inventory will be displayed, and the app will be closed.

![Bamazon Add to Inventory Complete (Manager App)](images/maddcomplete)

* If the user selects the Add New Product operation, the user will be prompted to enter the name of the product that they would like to add.

![Bamazon Add New Product (Manager App)](images/mnewname)

* Once a product name is entered, the user will be prompted to enter the department that the product belongs to.

![Bamazon Add New Product Department (Manager App)](images/mnewdep)

* Once the department is entered, the user will be prompted to enter the price of the product.

![Bamazon Add New Product Price (Manager App)](images/mnewprice)

* Once the price is entered, the user will be prompted to enter the quantity of the product.

![Bamazon Add New Product Quantity (Manager App)](images/mnewquantity)

* Once the quantity is entered, a message will be displayed telling the user that the product was added, a table will be displayed showing the entire inventory including the new item, and the app will close.

![Bamazon Add New Product Complete (Manager App)](images/mnewcomplete)