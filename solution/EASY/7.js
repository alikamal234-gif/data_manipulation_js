const { employees } = require('../../dataset.js');
function getHighestPaidEmployee(){

    for(let i = 0 ; i < employees.length ; i++){
        let employeesHeightsalery ;
        let saleryhighest = employees[i].salary
        for(let j = i+1;j< employees.length ; j++){
            if(employees[j].salary > saleryhighest){
                saleryhighest = employees[j].salary
                employeesHeightsalery = employees[j]
            }
        }
        return employeesHeightsalery
    }
    
   
}
console.log(getHighestPaidEmployee())