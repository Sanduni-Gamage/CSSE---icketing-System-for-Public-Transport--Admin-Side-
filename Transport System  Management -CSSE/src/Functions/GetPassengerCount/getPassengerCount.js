const getPassengerCount = (passengers) => {
    let localCount = 0;
    let ForeignCount = 0;
    passengers.map(p => {
        if (p.type === "Local") {
            ++localCount;
        } else if (p.type === "Foreign") {
            ++ForeignCount;
        }
    })
    let passengerCount = [localCount, ForeignCount];
    return passengerCount;
}

module.exports = getPassengerCount;