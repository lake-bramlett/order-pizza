////business logic////
function Order(deliverTo) {
  this.orderName = '';
  this.orderItems = [];
  this.deliverTo = deliverTo;
  this.orderTotal = 0;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.applyCoupon = function () {
  order.orderTotal *= .75;
};

// Pizza.prototype.customTopping = function () {
//   this.toppings.push();
// };


////user interface logic////

var order = new Order

function toppings() {
  var toppingsArray = [];
  $(".toppings input:checked").each(function() {
    toppingsArray.push($(this).val());
  });
  return toppingsArray;
}

function addPizza() {
  var pizza = new Pizza (parseInt($('.size input:checked').val()), toppings());
  order.orderItems.push(pizza);
  order.orderTotal += (pizza.size + pizza.toppings.length);
};

function getTotal() {
    order.orderName = $('.ordername input').val();
    $('.order').show();
    $('p .totalpizzas').text(order.orderItems.length);
    $('p .pricetotal').text(order.orderTotal.toFixed(2));
    $('#pizzaform, .add-pizza, .get-total').hide();
};

function applyCoupon() {
  order.applyCoupon();
  $('p .pricetotal').text(order.orderTotal.toFixed(2));
  $('button.apply-coupon').hide();
}

$(document).ready(function() {
 console.log('jquery enabled');
  $('button.add-pizza').click(function() {
    console.log('pizza added');
     addPizza();
  });
  $('button.get-total').click(function() {
    console.log('user gets total');
    getTotal();
  });
  $('button.apply-coupon').click(function() {
    console.log('user applies coupon');
    applyCoupon();
  });


});//jquery
