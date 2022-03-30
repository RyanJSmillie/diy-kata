const joinNames = namesObj => {
    let result = [];

    for(let i = 0; i < namesObj.length; i++){
        result.push(namesObj[i].name)
    }

    result.splice(result.length -1, 0, '& ')

    string = result.toString(' ');

return string;

};

module.exports = joinNames;
