//Back-End
//Variable Declarations
var counter = 0
var gTotal = 0
//Objects
function Pizza(size, name) {
  this.ingredients = [];
  this.size = size;
  this.price = 8;
  this.name = name;
}
Pizza.prototype.addTops = function(array) {
  for(i=0;i<array.length;i++) {
    this.ingredients.push(parseInt(array[i]));
  }
  //
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
Order.prototype.calcGTotal = function(total) {
  this.grandTotal += total;
}
var order = new Order;
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
//Front-End
$(document).ready(function() {
  $("form#pizza1").submit(function(event) {
    event.preventDefault();
    var size1 = $("#size").val();
    var name = "A " + nameGen(size1)+" pizza";
    var pizza = new Pizza(size1, name);
    order.items.push(pizza);
    $(".jumbotron").slideToggle();
    $(".topsAdd").slideToggle();
  });
  $("form.toppings").submit(function(event) {
    console.log(counter);
    event.preventDefault();
    var toppingsArr = []
    $("input:checkbox[name=topping]:checked").each(function(){
        toppingsArr.push($(this).val());
    });
    order.items[counter].addTops(toppingsArr);
    var total = order.items[counter].calcCost();
    console.log(total);
    gTotal += total;
    order.calcGTotal(total);
    console.log(order.grandTotal);
    counter++;
    $("#totalHere").text(order.grandTotal);
    debugger;
    for (var i=0;i<order.items.length;i++){
      var node = document.createElement("li");
      var textnode = document.createTextNode(order.items[i].name);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
    }

    $(".topsAdd").slideToggle();
    $(".thanks").show();
    $(".totalBox").show();
  });
  $("form#pizza2").submit(function(event) {
    event.preventDefault();
    var size1 = $("#size2").val();
    var name = "A " + nameGen(size1)+" pizza";
    var pizza = new Pizza(size1, name);
    order.items.push(pizza);
    $(".thanks").slideToggle();
    $(".topsAdd").slideToggle();
  });
});
