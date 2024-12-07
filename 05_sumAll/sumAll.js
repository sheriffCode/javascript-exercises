const sumAll = function(int1, int2) {
    if(Number.isInteger(int1) && Number.isInteger(int2) &&
        int1 >= 0 && int2 >= 0) {
        const sorted = [...arguments].sort((a, b) => a - b);
        let sum = 0;
        for(let i = sorted[0]; i <= sorted[1]; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
