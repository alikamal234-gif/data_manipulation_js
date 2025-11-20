const { employees } = require('../../dataset.js');
function getEmployeeDepartmentById(){
   for(let i = 0 ; i< employees.length;i++){
    if(employees[i].id == 5){
        console.log(employees[i].department)
    }
   }
}
getEmployeeDepartmentById()