const { employees } = require('../../dataset.js');
function calculateAverageAge(){
    let totaleAge = 0
    for(let e of employees){
        totaleAge += e.age
    }
    return totaleAge/ employees.length
   
}
console.log(calculateAverageAge())