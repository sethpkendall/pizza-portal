//Back-End
//Variable Declarations
//Objects
function Pizza(size) {
  this.ingredients = [];
  this.size = size;
  this.price = 8;
}
Pizza.prototype.addTops = function(array) {
  for(i=0;i<array.length;i++) {
    this.ingredients.push(array[i]);
  }
  //
  // array.forEach(function(topping) {
  //   this.ingredients.push(topping);
  // });
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
    console.log(toppingsArr);
    debugger;
    order.items[0].addTops(toppingsArr);
  });
});
