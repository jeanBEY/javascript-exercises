const reverseString = function(word) {
    let finalString = '';

    for(let i = word.length-1 ; i >= 0; i--){
        finalString += word[i];
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
