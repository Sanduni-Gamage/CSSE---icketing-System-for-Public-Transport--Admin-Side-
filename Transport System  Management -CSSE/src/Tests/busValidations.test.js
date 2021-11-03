import busValidations from "../Functions/Validations/BusValidations/BusValidations";

//Positive Test Case
test('busValidationsPositive', () => {
    expect(busValidations({
        busNumber: "NB 2346",
        routeNumber: "A32",
        type: "A/C",
        sheets: 52,
        driver:"smith" ,
        passcode:"116",
        
    })).toStrictEqual({
        status: true
    });
});

//Negative Test Case
test('busValidationsNegative', () => {
    expect(busValidations({
        busNumber: "NB 2346",
        routeNumber: "A32",
        type: "AC",
        sheets: 52,
        driver:"smith" ,
        passcode:"116",
        
    })).toStrictEqual({
        status: true
    });
});

