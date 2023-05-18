/*  function named calculateNumber. It should accepts three arguments type(SUM,
    SUBTRACT, or DIVIDE)(string) (number) a and b
    function should round a and b and return the rounded value based on the type
    SUM should return the sum of a and b
    SUBTRACT should return a minus b
    DIVIDE should return a divided by b
*/

const calculateNumber = (type, a, b) => {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
        if (Math.round(b) === 0) {
        return 'Error';
        }
        return Math.round(a) / Math.round(b);
    }
    }

module.exports = calculateNumber;
