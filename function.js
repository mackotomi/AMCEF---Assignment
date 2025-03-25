// ≡Ö≡ Check
console.log(orders);

// Data conversion, obeyed, not gonna use this. Was curious to see the date in human readable format..
let oderdate = 1708272032000;
let date_convertion = new Date(oderdate);
console.log('Checking the datatype of the new Date conversion, datatype is equal to -> ' + typeof date_convertion); // Makes an object


console.log('this date 170827203200 has been converted into' + date_convertion);

// Filter all array objects elements where state === canceled. The goal in the end is to get the cancelled orders → Highest priority eg. Top of the Hierrarchy so we begin focusing on the cnacelled orders.

let cancelled_orders = orders.filter(order => order.state === 'canceled');

// ≡Ö≡ Check
// console.log(cancelled_orders); 

// Transformation ↺ the createdAt timestamp to a Date object for each object
let canceled_orders_date_converstion = cancelled_orders.map(order => ({
    ...order,
    createdAt: new Date(order.createdAt)  // Convert timestamp to Date object
}));

// Now we have the cancelled orders with the createdAt property as a Date object
// Luckily, the dates are 

// ≡Ö≡ Check
console.log(canceled_orders_date_converstion);

// Now lets clean the unnecessary properties from the cancelled orders, what we need in the end is only the year and the date of the order.
canceled_orders_data_reduction = canceled_orders_date_converstion.map(order => {
    const { year, createdAt } = order;
    return { year, createdAt };
});

// ≡Ö≡ Check
console.log(canceled_orders_data_reduction);

// Lastly, using if condition we create logical separation and filter the orders into new object, where key will be year, where year will hold corrensponding year/date of the orders.
let canceled_orders_by_year = canceled_orders_data_reduction.reduce((acc, order) => {
    const { year, createdAt } = order;
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(createdAt);
    return acc;
}, {});

console.log(canceled_orders_by_year);