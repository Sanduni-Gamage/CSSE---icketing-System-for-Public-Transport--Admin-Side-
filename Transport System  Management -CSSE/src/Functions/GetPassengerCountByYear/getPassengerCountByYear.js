import getLabels from "../GetLabels/getLabels";

const getPassengerCountByYear = (passengers) => {
    let passengerCount = [];
    getLabels(passengers).map(year => {
        let count = 0;
        passengers.map(p => {
            if(p.reg_Date === year){
                ++count;
            }
        })
        passengerCount.push(count);
    })
    return passengerCount;
}

module.exports = getPassengerCountByYear;