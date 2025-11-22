import { employees } from "../../dataset.js";

function getEmployeesByDepartment(department) {
    const filtrage = employees.filter(value => value.department == department)
    return filtrage
}
// console.log(getEmployeesByDepartment("Design"))




// =======================================================

function augmenterSalaires(pourcentage)  {
    return employees.map(value =>({
        ...value,
        salary: value.salary + (value.salary / pourcentage)
        
    }))
}
// console.log(augmenterSalaires(10))


function getDepartmentStats() {
   let status = {}

   employees.forEach(employee => {
        if(!status[employee.department]){
            status[employee.department] = {
                number : 0 ,
                moyen : 0,
                max : 0
            } 
        }
        status[employee.department].number++
        status[employee.department].moyen += employee.salary
        status[employee.department].max = Math.max(status[employee.department].max,employee.salary)
   })
   Object.keys(status).forEach(stat => {
    status[stat].moyen = status[stat].moyen / status[stat].number
   })
    return status
}
// console.log(getDepartmentStats())



function getEmployeesWithSkill(skill) {
    let s7abSkills = []
    employees.forEach(employee => {
        if(employee.skills.includes(skill)){
            s7abSkills.push(employee)
        }
    })
    return s7abSkills
}
// console.log(getEmployeesWithSkill("Press Releases"))

const company = {
    employees: employees, // le tableau existant
    projects: {
        "Project Alpha": [],
        "Project Beta": [],
        "Project Gamma": [],
        "Project Delta": [],
        "Project Epsilon": []
    },
    
    // À implémenter :
    assignEmployeeToProject: function(employeeId, projectName) {
        // Assigner un employé à un projet
        employees.forEach(emplyee =>{
            if(employeeId == emplyee.id){
                this.projects[projectName].push(emplyee)
            }
        })
        
    },
    
    getProjectTeam: function(projectName) {
        // Retourner tous les employés d'un projet
        return this.projects[projectName]
    },
    
    getEmployeeProjects: function(employeeId) {
        // Retourner tous les projets d'un employé
        let project = []
        employees.forEach(emplye => {
            if(Number(emplye.id) == Number(employeeId)){
               project.push(emplye.projects)
            }
        })
        return project
    },
    
    getEmployeesWithMultipleProjects: function() {
        // Retourner les employés avec au moins 2 projets
        const employefiltre = employees.filter(employ => {
            return employ.projects.length <= 2
        })
        return employefiltre
    }
};
company.assignEmployeeToProject(2,"Project Alpha")
company.assignEmployeeToProject(3,"Project Alpha")
console.log(company.getProjectTeam("Project Alpha"))
console.log(company.getEmployeeProjects(1))
console.log(company.getEmployeesWithMultipleProjects())



