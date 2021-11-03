const getTotalFinance = (finances) => {
    let totalIncome = 0;
    let sum = 0;
    finances.map(f => {
        totalIncome =f.total
        sum = totalIncome + f.total
        
        sum.toString(16);
        
    })
    let total = [sum]
    return total;
}

module.exports = getTotalFinance;