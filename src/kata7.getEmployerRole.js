const getEmployerRole = (employeeName, employees) => {
    let result = '';

    for(let i = 0; i < employees.length; i++) {
        if(employees[i].name === employeeName) {
            result = employees[i].role;
        }
    }
return result;

};

module.exports = getEmployerRole;
