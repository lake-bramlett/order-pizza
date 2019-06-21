////business logic////
function Order(orderName, orderItems, deliverTo, orderTotal) {
  this.orderName = orderName;
  this.orderItems = [];
  this.deliverTo = deliverTo;
  this.orderTotal = orderTotal;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addTotal = function () {
  return pizzaOrder.size + pizzaOrder.toppings.length;
};


////user interface logic////

var order = new Order;

$(document).ready(function() {
 console.log('jquery enabled');
  $('button add-pizza').click(function() {
    console.log('button clicked');
    var pizzaOrder = new Pizza ('lake', 12, ['Pineapple', 'Canadian Bacon', 'Onion']);
    order.orderItems.push(pizzaOrder);
  });


});//jquery
