function splitTheBill(group) {
    // Calculate the total spent by the group
    const totalSpent = Object.values(group).reduce((sum, amount) => sum + amount, 0);
    
    // Calculate the number of people in the group
    const numPeople = Object.keys(group).length;
    
    // Calculate the average spent by each person
    const averageSpent = totalSpent / numPeople;
    
    // Calculate how much each person should pay or receive
    const result = {};
    for (let person in group) {
        const balance = (group[person] - averageSpent).toFixed(2); // Round to two decimal places
        result[person] = parseFloat(balance); // Convert back to number after rounding
    }
    
    return result;
}

// Example usage
const group = {
    A: 20,
    B: 15,
    C: 10
};

console.log(splitTheBill(group));
