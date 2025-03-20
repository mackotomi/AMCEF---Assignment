console.log(orders);

let oderdate = 1708272032000;
let date_convertion = new Date(oderdate);

console.log('this date 170827203200 has been converted into' + date_convertion);

// Filter all array objects elements where state === canceled
let cancelled_orders = orders.filter(order => order.state === 'canceled');
console.log(cancelled_orders);
