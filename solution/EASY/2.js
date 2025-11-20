const { employees } = require('../../dataset.js');
function getLastEmployeeLastName(){
   console.log(employees[employees.length-1].lastName)
}
getLastEmployeeLastName()