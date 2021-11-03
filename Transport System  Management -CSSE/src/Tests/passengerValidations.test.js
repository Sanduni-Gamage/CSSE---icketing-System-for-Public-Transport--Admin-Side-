import passengerValidations from "../Functions/Validations/PassengerValidations/PassengerValidations";

//Positive Test Case
test('passengerValidationsPositive', () => {
    expect(passengerValidations({
        name: "sam",
        nic: "883342117v",
        type: "Local",
        dob: "26-11-1988",
        mobile: "0756890334",
        password:"sam123" ,
        reg_date:"2021-03-22",
        
    })).toStrictEqual({
        status: true
    });
});

//Negative Test Case
test('passengerValidationsNegative', () => {
    expect(passengerValidations({
        name: "sam",
        nic: "88334211v",
        type: "Local",
        dob: "26-11-1988",
        mobile: "0756890334",
        password:"sam123" ,
        reg_date:"2021-03-22",
        
    })).toStrictEqual({
        status: true
    });
});

