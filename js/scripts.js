////business logic////
function Order(deliverTo) {
  this.orderName = '';
  this.orderItems = [];
  this.deliverTo = deliverTo;
  this.orderTotal = 0;
}

function Pizza(id, size, toppings) {
  this.id = id;
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


function displayPizzaInfo(pizzaNum) {
  $('div.pizza-info').slideDown();
  $('.pizza-info span.pizza-size').text(order.orderItems[pizzaNum].size + '"');
  $('.pizza-info span.pizza-toppings').text(order.orderItems[pizzaNum].toppings);
}


function addPizza() {
  console.log('pizza added');
  var pizzaId = order.orderItems.length;
  var pizza = new Pizza (pizzaId, parseInt($('.size input:checked').val()), toppings());
  order.orderItems.push(pizza);
  order.orderTotal += (pizza.size + pizza.toppings.length);
  function appendPizzaList() {
    $('ul.pizza-list').append('<li class="pizza' + pizzaId + '">Pizza #' + (pizzaId + 1));
    $('ul.pizza-list li').click(function() {
      $('ul.pizza-list li').removeClass('selected-pizza');
      $(this).addClass('selected-pizza')
      var pizzaIndex = $(this).index();
      displayPizzaInfo(pizzaIndex);
    });
  }
  appendPizzaList()
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
