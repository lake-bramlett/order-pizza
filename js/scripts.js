////business logic////
function Pizza(orderName, size, toppings) {
  this.orderName = orderName;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addTotal = function () {
  return pizzaOrder.size + pizzaOrder.toppings.length;
};


var pizzaOrder = new Pizza ('lake', 12, ['Pineapple', 'Canadian Bacon', 'Onion'])
////user interface logic////



$(document).ready(function() {
 console.log('jquery enabled');
  $('button').click(function() {
    console.log('button clicked');
  });


});//jquery
