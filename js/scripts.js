//Back-End
//Variable Declarations
var counter = 0
//Objects
function Pizza(size, name) {
  this.ingredients = [];
  this.size = size;
  this.price = 8;
  this.name = name;
}
//Pizza Object Methods
Pizza.prototype.addTops = function(array) {
  for(i=0;i<array.length;i++) {
    this.ingredients.push(parseInt(array[i]));
  }
  // array.forEach(function(topping) {
  //   this.ingredients.push(topping);
  // });
  // QUESTION: Why didn't this forEach loop work?
}
Pizza.prototype.calcCost = function() {
  for(i=0;i<this.ingredients.length;i++) {
    if ((this.ingredients[i]>=1)&&(this.ingredients[i]<=6)) {
      this.price += 2;
    } else if (this.ingredients[i]>=7 && this.ingredients[i]<=12){
      this.price +=1;
    }
  }
  if (this.size==="1") {
    this.price+=0
  } else if (this.size==="2") {
    this.price+=2
  } else if (this.size==="3") {
    this.price+=4
  } else if (this.size==="4") {
    this.price+=5
  }
  return this.price;
}
function Order() {
  this.items = [];
  this.rush = false;
  this.grandTotal = 0;
}
var order = new Order;
//Order Object Methods
Order.prototype.calcGTotal = function(total) {
  this.grandTotal += total;
}
//Functions
var nameGen = function(size) {
  if (size==="1") {
    return "small"
  } else if (size==="2") {
    return "medium"
  } else if (size==="3") {
    return "large"
  } else if (size==="4") {
    return "Extra-large"
  }
}
var checkRushed = function(value) {
  if (value==="1") {
    console.log("something")
  } else if (value==="2") {
    order.grandTotal += 5;
  }
}
//Front-End
$(document).ready(function() {
  $("form#pizza1").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size").val();
    var pizzaName = "A " + nameGen(pizzaSize)+" pizza";
    var pizza = new Pizza(pizzaSize, pizzaName);
    order.items.push(pizza);
    $(".jumbotron").slideToggle();
    $(".topsAdd").slideToggle();
  });
  $("form.toppings").submit(function(event) {
    event.preventDefault();
    var toppingsArr = []
    $("input:checkbox[name=topping]:checked").each(function(){
        toppingsArr.push($(this).val());
    });
    $('input:checkbox').prop('checked', false);
    order.items[counter].addTops(toppingsArr);
    var total = order.items[counter].calcCost();
    order.calcGTotal(total);
    var node = document.createElement("li");
    var textnode = document.createTextNode(order.items[counter].name);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
    counter++;
    $("#totalHere").text(order.grandTotal);
    $(".topsAdd").slideToggle();
    $(".thanks").show();
    $(".totalBox").show();
  });
  $("form#pizza2").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size2").val();
    var pizzaName = "A " + nameGen(pizzaSize)+" pizza";
    var pizza = new Pizza(pizzaSize, pizzaName);
    order.items.push(pizza);
    $(".thanks").slideToggle();
    $(".topsAdd").slideToggle();
  });
  $("#goToDelivery").click(function(event) {
    $(".thanks").slideToggle();
    $(".delivery").slideToggle();
  });
  $("form#new-address").submit(function(event) {
    event.preventDefault();
    $(".delivery").slideToggle();
    $(".totalBox").slideToggle();
    $(".goodbye").slideToggle();
    var orderName = $("input#name").val();
    var orderStreet = $("input#street").val();
    var orderCity = $("input#city").val();
    var orderState = $("input#state").val();
    var orderZip = $("input#zip").val();
    var rushed = $("#rushOrder").val();
    checkRushed(rushed);
    $("#nameHere").text(orderName);
    $("#streetHere").text(orderStreet);
    $("#cityHere").text(orderCity);
    $("#stateHere").text(orderState);
    $("#zipHere").text(orderZip);
    $("#finalTotalHere").text(order.grandTotal);
  });
});
