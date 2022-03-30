const booleanToWord = boolean => {
    let result = "";

    if (boolean === true) {
        result = 'Yes';
    } else if (boolean === false) {
        result ='No';
    }

    return result;
};

module.exports = booleanToWord;
