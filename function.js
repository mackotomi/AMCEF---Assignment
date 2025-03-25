
// I completely forgot to create a function for it, lool, but I will do it now - baka.

function get_canceled_orders_object_by_year_and_month(orders) {

    // ≡Ö≡ Check
    // console.log(orders);

    // Filter all array objects elements where state === canceled. The goal in the end is to get the cancelled orders → Highest priority eg. Top of the Hierrarchy so we begin focusing on the cnacelled orders.

    let cancelled_orders = orders.filter(order => order.state === 'canceled');

    // ≡Ö≡ Check
    // console.log(cancelled_orders); 

    // Transformation ↺ the createdAt timestamp to a Date object for each object
    let canceled_orders_date_converstion = cancelled_orders.map(order => ({
        ...order,
        createdAt: new Date(order.createdAt)  // Convert timestamp to Date object
    }));

    // ≡Ö≡ Check
    // console.log(canceled_orders_date_converstion);

    // Clean the unnecessary properties from the cancelled orders, what we need in the end is only the years and dates from the orders.
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
    console.dir(object_objective);
}

// ≡Ö≡ Check
get_canceled_orders_object_by_year_and_month(orders);

// Final notes: the object is ordered Ascedingly, meaning, the first key starts with the oldest year, and the last key is the most recent year. This is by design as the The ECMAScript specification defines that numeric keys in plain objects are always enumerated in ascending order. Because of this, i would not recommend to change the order of the keys in the object if specifically requested with a purpose in mind or seniority level person with more experience would request it. For this reason i didnt even tried to sort the object keys to start from 2024 ↓ 2023 ↓ 2022 ↓ 2021 ↓ 2020. You got the idea..

//  Something i dont like about the function, is, that it is only restricted on the orders array focusing and extracting only the date wihin inside the function, with no possibility to controll it in some way, but i guess, this this is the power of object oriented programming, where i would create a similar set of functons like this one and call them, specific function -> for specific purpose with a specific design in mind and usecase. Long story short: This current function works only for the assigement purpose, and that's it..

// The assigement was focusing on solving a problem based on idea, where the idea was to extract data sets from array filled with objects. Each object would contain associated properties for given order "order_id". I did used chatgpt as assistant to help me with the code along with my diagrams, that would help to better understand what to ask and what tools to use and when and how to get from A to B, where the B is the final goal and the problem that was solved. Im not sure if was sucessfull in the end, but i did my best to solve the problem and to provide the solution. I hope this is enough to pass the test. Thank you for your time and patience. I hope to hear from you soon and to get the feedback on my code. Thank you for this project and opportunity, as each project is a learning experience and a chance to grow and to learn something new.