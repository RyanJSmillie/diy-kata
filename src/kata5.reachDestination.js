const reachDestination = (distance, speed) => {
    let result = '';

    var calc = Math.ceil(distance / speed * 2) / 2;

    result = 'I should be there in ' + calc + ' hours'

    return result;

};

module.exports = reachDestination;
