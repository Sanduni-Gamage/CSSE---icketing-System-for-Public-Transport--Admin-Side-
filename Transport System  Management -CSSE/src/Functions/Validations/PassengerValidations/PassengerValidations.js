import joi from "@hapi/joi"

const PassengerValidations = (passenger) => {
    const schema = joi.object({
        name: joi.string().min(3).max(255).required().messages({
            "string.empty": `Name is required.`,
            "any.required": `Name is required.`,
            "string.base": `Name should be a type of 'text'.`,
            "string.min": `Name should have a minimum length of {#limit}.`,
            "string.max": `Name should have a maximum length of {#limit}.`,
        }),
        nic: joi.string().min(10).max(255).required().messages({
            "string.empty": `Passport is required.`,
            "any.required": `Passport is required.`,
            "string.base": `Passport should be a type of 'text'.`,
            "string.min": `Passport should have a minimum length of {#limit}.`,
            "string.max": `Passport should have a maximum length of {#limit}.`,
        }),
        type: joi.string().min(3).max(255).required().messages({
            "string.empty": `Type is required.`,
            "any.required": `Type is required.`,
            "string.base": `Type should be a type of 'text'.`,
            "string.min": `Type should have a minimum length of {#limit}.`,
            "string.max": `Type should have a maximum length of {#limit}.`,
        }),
        dob: joi.string().min(3).max(255).required().messages({
            "string.empty": `Date of Birth is required.`,
            "any.required": `Date of Birth is required.`,
            "string.base": `Date of Birth should be a type of 'text'.`,
            "string.min": `Date of Birth should have a minimum length of {#limit}.`,
            "string.max": `Date of Birth should have a maximum length of {#limit}.`,
        }),
        mobile: joi.string().min(3).max(255).required().messages({
            "string.empty": `Mobile Number is required.`,
            "any.required": `Mobile Number is required.`,
            "string.base": `Mobile Number should be a type of 'text'.`,
            "string.min": `Mobile Number should have a minimum length of {#limit}.`,
            "string.max": `Mobile Number should have a maximum length of {#limit}.`,
        }),
        password: joi.string().min(3).max(255).required().messages({
            "string.empty": `Password is required.`,
            "any.required": `Password is required.`,
            "string.base": `Password should be a type of 'text'.`,
            "string.min": `Password should have a minimum length of {#limit}.`,
            "string.max": `Password should have a maximum length of {#limit}.`,
        }),
        reg_date: joi.string().min(3).max(255).required().messages({
            "string.empty": `Register Date is required.`,
            "any.required": `Register Date is required.`,
            "string.base": `Register Date should be a type of 'text'.`,
            "string.min": `Register Date should have a minimum length of {#limit}.`,
            "string.max": `Register Date should have a maximum length of {#limit}.`,
        }),
    });

    const result = schema.validate(passenger);

    if (result.error) {
        return {
            status: false,
            error: result.error.details[0].message,
            path: result.error.details[0].context.label,
        }
    } else {
        return {
            status: true
        }
    }
};

export default PassengerValidations;
