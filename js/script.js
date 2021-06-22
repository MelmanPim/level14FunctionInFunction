const age = function (number) {
    console.log("Checking for age..");
    if (number >= 18) {
        console.log('true')
        return true;
    }
    else if (number < 18) {
        console.log('false')
        return false;
    }
};

const response = function (age) {
    console.log("Entering input for response..");
    if (age) {
        console.log('Hello there');
        return 'Hello there';
    }
    console.log('Hello kiddo');
    return 'Hello kiddo';
};

const greeting = function (number) {
    console.log("Putting in input..");
    const ageCheck = age(number);
    console.log("Waiting for response..");
    const responseCheck = response(ageCheck);
};

console.log(greeting(18));


/*
const addVAT = function (amount) {
    console.log('Adding VAT');
    return 1.21 * amount;
};

const getPrice = function (amount) {
    console.log('Putting base price in');
    const VATResult = addVAT(amount);
    console.log('The total price is €', VATResult);
    return VATResult;
};

console.log(getPrice(10));
*/

const calculateBasePrice = function (fullPrice) {
    console.log('Calculating base price');
    return fullPrice / 1.21;
}

const calculateVAT = function (getBasePrice) {
    console.log('Calculating VAT');
    return getBasePrice * 0.21;
}

const getFullVat = function (fullPrice) {
    const getBasePrice = calculateBasePrice(fullPrice);
    console.log('The base price is €', Math.round(getBasePrice));
    const getVAT = calculateVAT(getBasePrice);
    console.log('The added VAT is €', Math.round(getVAT))
};

console.log(getFullVat(121));