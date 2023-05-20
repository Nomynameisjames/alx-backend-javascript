/*
    function sendPaymentRequestToApi(totalAmount, and totalShipping)
    {
        // Send totalAmount and totalShipping to API...
    }
*/

const Utils = require('./utils.js');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
    return total;
}

module.exports = sendPaymentRequestToApi;
