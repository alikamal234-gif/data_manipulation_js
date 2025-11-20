const { employees } = require('../../dataset.js');
function hasInactiveEmployees(){
   for(let e of employees){
    if(e.isActive === false){
        return true
    }
   }
   return false
}
console.log(hasInactiveEmployees())