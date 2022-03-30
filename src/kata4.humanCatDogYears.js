const humanCatDogYears = number => {
    let result = [];
    let catSum = 0;
    let dogSum = 0;

    result.push(number);

    for(let i = 0; i < number; i++) {
        if (i === 1) {
            catSum += 15;
        } else if (i === 2) {
            catSum += 9;
        } else {
            catSum += 4;
        }
    }
    
    for(let i = 0; i < number; i++) {
        if (i === 1) {
            dogSum += 15;
        } else if (i === 2) {
            dogSum += 9;
        } else {
            dogSum += 5;
        }
    }

    result.push(catSum);
    result.push(dogSum);
    return result;
};

module.exports = humanCatDogYears;
