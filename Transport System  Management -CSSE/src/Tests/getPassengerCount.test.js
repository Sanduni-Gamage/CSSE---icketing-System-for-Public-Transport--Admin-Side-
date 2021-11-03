const getPassengerCount = require('../Functions/GetPassengerCount/getPassengerCount');

//Positive test case
test('getPassengerCountPositive', () => {
    expect(getPassengerCount([{
        id: "6BdulGJA5LlbHFWscBx7",
        dob: "26/05/1995",
        mobile: 767490238,
        nic: "954432121v",
        name: "sam",
        password: "sam123",
        type: "Local",
        reg_date: "2020-10-04",
    },
        {
        id: "YpjM760ryw7D1X7qmMjN",
        dob: "1998-11-26",
        mobile: 767490456,
        nic: "2345678931",
        name: "Gamitha",
        password: "nan123",
        type: "Foreign",
        reg_date: "2021-10-04",
        }]))
        .toStrictEqual([1,1]);
});
//Negative test case
test('getPassengerCountNegative', () => {
    expect(getPassengerCount([{
        id: "6BdulGJA5LlbHFWscBx7",
        dob: "26/05/1995",
        mobile: 767490238,
        nic: "954432121v",
        name: "sam",
        password: "sam123",
        type: "Local",
        reg_date: "2020-10-04",
    },
        {
        id: "YpjM760ryw7D1X7qmMjN",
        dob: "1998-11-26",
        mobile: 767490456,
        nic: "2345678931",
        name: "Gamitha",
        password: "nan123",
        type: "Foreign",
        reg_date: "2021-10-04",
        }]))
        .toStrictEqual([1,1]);
});

//it19140476