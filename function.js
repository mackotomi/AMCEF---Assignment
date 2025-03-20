console.log(orders);
// Filter all object elements within an array, where object element key === amount && createdAt && customerName
let orderByFilter = orders.filter(order => 
    'amount' in order && 
    'createdAt' in order && 
    'customerName' in order
);

console.log(orderByFilter);
