const leapYears = function(year) {

    let bool;

    if(year % 4){
        bool = true;
    }
    else if(year % 400){
        bool = true;
    }
    else if(year % 100){
        if(year % 400){
            bool = true;
        }

        bool = false;
    }
    else bool = false;

    return bool;

};

// Do not edit below this line
module.exports = leapYears;
