const { employees } = require('../../dataset.js');
function hasEmployeesWithoutProjects(){
    for(let i = 0 ; i < employees.length; i++){
        if(employees[i].projects.length < 0){
            return false
        }
    }
    return true
}
console.log(hasEmployeesWithoutProjects())