const { employees } = require('../../dataset.js');
function getUniqueDepartments(){
    let list = []
    for(let i = 0 ; i< employees.length; i++){
       for(let j = 0 ; j> list;j++){
        if(list[j] == employees[i].department){
            break
        }else{
            list.push(employees[i].department)
        }
       }
    }
   return list
}
console.log(getUniqueDepartments())