//Back-End
//Variable Declarations
//Objects
function Pizza(size) {
  this.ingredients = [];
  this.size = size;
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

});
