import { employees } from "../../dataset.js";

function getEmployeesByDepartment(department) {
    const filtrage = employees.filter(value => value.department == department)
    return filtrage
}
// console.log(getEmployeesByDepartment("Design"))




// =======================================================

function augmenterSalaires(pourcentage) {
    return employees.map(value => ({
        ...value,
        salary: value.salary + (value.salary / pourcentage)

    }))
}
// console.log(augmenterSalaires(10))


function getDepartmentStats() {
    let status = {}

    employees.forEach(employee => {
        if (!status[employee.department]) {
            status[employee.department] = {
                number: 0,
                moyen: 0,
                max: 0
            }
        }
        status[employee.department].number++
        status[employee.department].moyen += employee.salary
        status[employee.department].max = Math.max(status[employee.department].max, employee.salary)
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
        if (employee.skills.includes(skill)) {
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
    assignEmployeeToProject: function (employeeId, projectName) {
        // Assigner un employé à un projet
        employees.forEach(emplyee => {
            if (employeeId == emplyee.id) {
                this.projects[projectName].push(emplyee)
            }
        })

    },

    getProjectTeam: function (projectName) {
        // Retourner tous les employés d'un projet
        return this.projects[projectName]
    },

    getEmployeeProjects: function (employeeId) {
        // Retourner tous les projets d'un employé
        let project = []
        employees.forEach(emplye => {
            if (Number(emplye.id) == Number(employeeId)) {
                project.push(emplye.projects)
            }
        })
        return project
    },

    getEmployeesWithMultipleProjects: function () {
        // Retourner les employés avec au moins 2 projets
        const employefiltre = employees.filter(employ => {
            return employ.projects.length <= 2
        })
        return employefiltre
    }
};
company.assignEmployeeToProject(2, "Project Alpha")
company.assignEmployeeToProject(3, "Project Alpha")
// console.log(company.getProjectTeam("Project Alpha"))
// console.log(company.getEmployeeProjects(1))
// console.log(company.getEmployeesWithMultipleProjects())



//=========================================================

function masseSalarialeFor() {
    let total = 0;
    // Utiliser for classique
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary
    }
    return total;
}
// console.log(masseSalarialeFor())

function listerEmailsForOf() {
    const emails = [];
    // Utiliser for...of
    for (let email of employees) {
        emails.push(email.email)
    }
    return emails;
}
// console.log(listerEmailsForOf())


function compterParDepartementForEach() {
    let stats = {};
    // Utiliser forEach
    employees.forEach(employee => {
        if (!stats[employee.department]) {
            stats[employee.department] = 0
        }
        stats[employee.department]++

    })
    return stats;
}
// console.log(compterParDepartementForEach())

function employeesSimplifiesMap() {
    // Retourner [{id, nomComplet, department}]
    // Utiliser map
    const status = employees.map(employee => ({
        ...employee
    }))
    return status
}
// console.log(employeesSimplifiesMap())


function employesSeniors() {
    // Utiliser filter puis map
    const filtrage = employees.map(employee => {
        return employee
    }).filter(empl => {
        return empl.age > 35
    })
    return filtrage
}
// console.log(employesSeniors())


// EXERCICE 7

function rechercherEmployes(criteres) {
    // criteres: { department, minAge, maxAge, skills, minSalary, maxSalary }
    // Retourne les employés correspondant à tous les critères
    let filterCriteres = [];

    employees.forEach(employee => {
        let respecteTousLesCriteres = true;

        Object.keys(criteres).forEach(crite => {
            if (crite === "department") {
                if (employee.department !== criteres.department) {
                    respecteTousLesCriteres = false;
                }
            }
            else if (crite === "minSalary") {
                if (employee.salary < criteres.minSalary) {
                    respecteTousLesCriteres = false;
                }
            }
            else if (crite === "maxSalary") {
                if (employee.salary > criteres.maxSalary) {
                    respecteTousLesCriteres = false;
                }
            }
            else if (crite === "skills") {
                if (!criteres.skills.every(skill =>
                    employee.skills && employee.skills.includes(skill))) {
                    respecteTousLesCriteres = false;
                }
            }
        });

        if (respecteTousLesCriteres) {
            filterCriteres.push(employee);
        }
    });

    return filterCriteres
}
const criteres = {
    department: "Développement",
    // minSalary: 60000,
    // maxSalary: 70000,
    skills: ["JavaScript"]
};
// console.log(rechercherEmployes(criteres))


function genererNouvelId() {
    // Générer un ID unique non existant dans le tableau
    const newId = employees[employees.length - 1].id + 1
    return newId
}
// console.log(genererNouvelId())


function calculerAnciennete(joinDate) {
    // Retourne l'ancienneté en années
    // Format d'entrée : "YYYY-MM-DD"
    const date = (new Date).toISOString().split('T')[0].split("-")
    const autreDate = joinDate.split("-")
    const dateba9I = date[0] - autreDate[0]
    return dateba9I
}
// console.log(calculerAnciennete("2021-02-28"))

function competencesPlusCourantes() {
    // Retourne les 5 compétences les plus courantes
    // avec le nombre d'employés qui les possèdent
    let skills = {}

    employees.forEach(employee => {
        employee.skills.forEach(skill => {
            if (!skills[skill]) {
                skills[skill] = 1
            }else{
                skills[skill]++
            }
        })
    })

    return Object.entries(skills).sort((a,b) => b[1] - a[1]).splice(0,5).map(([skill,employee]) => ({skill,employee}))
}
// console.log(competencesPlusCourantes())

function suggererPromotions() {
    // Retourne les employés éligibles pour promotion :
    // - Ancienneté > 2 ans
    // - Salaire actuel < moyenne département
    // - Nombre de projets > 1
    let éligibles = []
    let moyen = 0
    employees.forEach(employee => {
        let isValid = true

        if(!(calculerAnciennete(employee.joinDate) > 2)){
            isValid = false
        }
        if(!(employee.projects.length > 1)){
            isValid = false
        }
        employees.forEach(empl => {
            moyen += empl.salary
        })
        moyen /= employees.length
        if(!(employee.salary > moyen)){
            isValid = false
        }
        if(isValid){
            éligibles.push(employee)
        }
    })
    return éligibles
}
console.log(suggererPromotions())