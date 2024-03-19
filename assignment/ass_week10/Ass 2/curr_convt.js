// write a program that converts from one currency to another; USD to NGN using javascript

function convertUSDToNGN(USD) {
    const exchangeRate = 1200; 
    return USD * exchangeRate;
}
const USD = 50; // Amount in US dollars
const NGN = convertUSDToNGN(USD);
console.log(`${USD} USD is equivalent to ${NGN} NGN.`);
