
# _Pizza Order Creator_
###_Epicodus Code Review for week 4, 8.26.2016_

#### By _Seth Kendall_

## Description

_This program is designed to take in pizza order specifications, store ordered pizzas as data objects and return an order total contingent upon size and ingredients included in the order._

## Specifications

* The program can receive form input of a pizza order and size and store it in a data object with properties for size and ingredients.
  * Example Input: "1 Large pizza"
  * Example Output: Pizza {ingredients: Array[0], size: "Large"}

* It can take in a list of ingredients to include and add them to the pizza object as an array.
  * Example Input: "Cheese, Pepperoni, Mushrooms"
  * Example Output: Pizza {ingredients: Array[3], size: "Large"}

* It can calculate and display a price based upon the size and ingredients of the pizza.
  * Example Input: "1 Large pizza with: Cheese, Pepperoni, Mushrooms"
  * Example Output: "Total: $14.50"

* It can store orders of more than one pizza and return a total that represents the cost of all pizzas ordered.
  * Example Input: "1 Large pizza with: Cheese, Pepperoni, Mushrooms, 1 Medium pizza with: Cheese"
  * Example Output: "Total Cost: $23.00"

* It can update the final total with additional charges for extra services.
  * Example Input: "1 Large pizza with: Cheese, Pepperoni, Mushrooms, 1 Medium pizza with: Cheese. Rush order."
  * Example Output: "Total Cost: $28.00"

* It can take in address information and store it for delivery.
  * Example Input: street address: 3190 Dockside Dr. City: Gainesville State: GA Zip:30501
  * Example Output: Delivery address: (3190 Dockside Dr. Gainesville, GA 30501)

## Setup Instructions

* _Clone the program from its github repository_
* _Open its index.html file in the browser of your choosing._

## Licensing

*This product can be used in accordance with the provisions under its MIT license.*

copyright (c) 2016 **_Seth Kendall_**
