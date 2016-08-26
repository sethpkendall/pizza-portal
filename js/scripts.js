//Back-End
//Variable Declarations
//Objects
function Pizza(size) {
  this.ingredients = [];
  this.size = size;
  this.price = 8;
}
Pizza.prototype.addTops = function(array) {
  console.log(array);
  for(i=0;i<array.length;i++) {
    this.ingredients.push(parseInt(array[i]));
  }
  console.log(this.ingredients);
  //
  // array.forEach(function(topping) {
  //   this.ingredients.push(topping);
  // });
  // QUESTION: Why didn't this forEach loop work?
}
Pizza.prototype.calcCost = function() {
  debugger;
  for(i=0;i<this.ingredients.length;i++) {
    if ((this.ingredients[i]>=1)&&(this.ingredients[i]<=6)) {
      this.price += 2;
    } else if (this.ingredients[i]>=7 && this.ingredients[i]<=12){
      this.price +=1;
    }
  }
  return this.price;
}
function Order() {
  this.items = [];
  this.rush = false;
}
var order = new Order;
//Front-End
$(document).ready(function() {
  $("form#pizza1").submit(function(event) {
    event.preventDefault();
    var size1 = $("#size").val();
    var pizza = new Pizza(size1);
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
    order.items[0].addTops(toppingsArr);
    var total = order.items[0].calcCost();
    console.log(total);
    $("#totalHere").text(total);
    $(".topsAdd").slideToggle();
    $(".thanks").show();
    $(".totalBox").show();
  });
});
