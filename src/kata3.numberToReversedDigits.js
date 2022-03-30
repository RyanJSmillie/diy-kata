const numberToReversedDigits = number => {

    let myFunc = num => Number(num);

    var intArray = Array.from(String(number), myFunc);
    let reverseArray = intArray.reverse();

    return reverseArray;

};

module.exports = numberToReversedDigits;
