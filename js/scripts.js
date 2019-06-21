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
  order.orderTotal *= .85;
};

// Pizza.prototype.customTopping = function () {
//   this.toppings.push();
// };


////user interface logic////

var order = new Order;

function toppings() {
  var toppingsArray = [];
  $(".toppings input:checked").each(function() {
    toppingsArray.push($(this).val());
  });
  return toppingsArray;
}

function addPizza() {
  console.log('pizza added');
  var pizza = new Pizza (parseInt($('.size input:checked').val()), toppings());
  order.orderItems.push(pizza);
  order.orderTotal += (pizza.size + pizza.toppings.length);
};

function getTotal() {
  console.log('user gets total');
  order.orderName = $('.ordername input').val();
  $('.order').show();
  $('p .customername').text(order.orderName);
  if (order.orderItems.length === 1) {
    $('p .totalpizzas').text(order.orderItems.length + ' pizza');
  } else if (order.orderItems.length > 1) {
    $('p .totalpizzas').text(order.orderItems.length + ' pizzas');
  };
  $('p .pricetotal').text(order.orderTotal.toFixed(2));
  $('#pizzaform, .add-pizza, .get-total').hide();
};

function useCoupon() {
  if ($('.coupon-input').val() === 'brambinos') {
    console.log('user applies coupon');
    order.applyCoupon();
    $('p .pricetotal').text(order.orderTotal.toFixed(2));
    $('button.apply-coupon, .coupon-label, .coupon-input').hide();
    $('p.coupon-alert').hide();
  } else {
    console.log('user enters invalid coupon code');
    $('p.coupon-alert').show();
  };
};

$(document).ready(function() {
 console.log('jquery enabled');
  $('button.add-pizza').click(function() {
     addPizza();
  });
  $('button.get-total').click(function() {
    getTotal();
  });
  $('button.apply-coupon').click(function() {
    useCoupon();
  });


});//jquery
