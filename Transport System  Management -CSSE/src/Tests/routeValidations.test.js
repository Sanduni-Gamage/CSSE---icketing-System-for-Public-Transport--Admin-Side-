import routeValidations from "../Functions/Validations/RouteValidation/routeValidations";

//Positive Test Case
test('routeValidationsPositive', () => {
    expect(routeValidations({
        routeNumber: "A27",
        start: "Galle",
        end: "Colombo",
        distance: 117,
        hours: 1,
        minutes: 30,
        fare: 20,
        stations: [{
            start: "Galle",
            end: "Colombo",
            distance: 117,
        }],
    })).toStrictEqual({
        status: true
    });
});

//Negative Test Case
test('routeValidationsNegative', () => {
    expect(routeValidations({
        routeNumber: "A27",
        start: "Galle",
        end: "Colombo",
        distance: 117,
        hours: 1,
        minutes: 30,
        fare: 20,
        stations: [{
            start: "Galle",
            end: "Colombo",
            distance: 117,
        }],
    })).not.toStrictEqual({
        status: true
    });
});

//IT 19028774