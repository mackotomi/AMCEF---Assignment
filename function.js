// ≡Ö≡ Check
console.log(orders);

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
// console.log(canceled_orders_date_converstion);

// Now lets clean the unnecessary properties from the cancelled orders, what we need in the end is only the year and the date of the order.
canceled_orders_data_reduction = canceled_orders_date_converstion.map(order => {
    const { year, createdAt } = order;
    return { year, createdAt };
});

// ≡Ö≡ Check
// console.log(canceled_orders_data_reduction);

// Lastly, using if condition we create logical separation and filter the orders into new object, where key will be year, where year will hold corrensponding year/date of the orders.
let canceled_orders_by_year = canceled_orders_data_reduction.reduce((acc, order) => {
    const { year, createdAt } = order;
    if (!acc[year]) {
        acc[year] = [];
    }
    acc[year].push(createdAt);
    return acc;
}, {});

let object_objective = canceled_orders_by_year; // This references the object goal objective.

// ≡Ö≡ Check
console.dir(object_objective);

// Final note, the object is ordered Asceding, so the first key is the oldest year, and the last key is the most recent year. This is by design as the The ECMAScript specification defines that numeric keys in plain objects are always enumerated in ascending order. Because of this, i would not recommend to change the order of the keys in the object if specifically requested with a purpose in mind. For this reason i didnt even tried to sort the object keys to start from 2024 ↓ 2023 ↓ 2022 ↓ 2021 ↓ 2020. You got the idea..