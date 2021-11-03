const compare = (a, b) => {
    if (a.arrival < b.arrival) {
        return -1;
    }
    if (a.arrival > b.arrival) {
        return 1;
    }
    return 0;
}
//IT19140476
module.exports = compare;