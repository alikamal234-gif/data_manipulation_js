const { employees } = require('../../dataset.js');
function countEmployeesInDepartment(){
    let numberdepartment =0
    for(let e of employees){
        if(e.department == "Développement"){
            numberdepartment++
        }
    }
    return numberdepartment
   
}
console.log(countEmployeesInDepartment())