const removeFromArray = function(array, items) {
    const args = [...arguments].slice(1);
    let result = array;
    for (const item of args) {
       result =  result.filter(el => el !== item);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
