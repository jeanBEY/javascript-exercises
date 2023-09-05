const removeFromArray = function(array, index) {
    let finalArray = [];

    for(let i = 0; i < array.length; i++){
        if(i !== (index-1)){
            finalArray.push(array[i]);
        }
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
