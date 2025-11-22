// const { employees } = require("../../dataset")


function getdata() {
    
    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        department: document.getElementById("department").value,
        skills: [],
    }
   
    skillsbtn.addEventListener("click", () => {
        formFields.innerHTML += `
            <input type="text" name="skills" placeholder="skills" id="skills" required>
        `
    })
    const skill = document.getElementById("skills").value
    data.skills.push(skill)
    employees.push(data)
    console.log(employees)
}
const ajoute = document.getElementById("ajoute")
const affichageplace = document.getElementById("affichage")
ajoute.addEventListener("click", (e) => {
    e.preventDefault()
    getdata()
    affichage()
})
function affichage() {
    for (let e of employees) {
        affichageplace.innerHTML += `
            <tr style="background-color : green">
                <th>${e.firstName}</th>
                <th>${e.lastName}</th>
                <th>${e.department}</th>
                <th>${e.position}</th>
                <th>${e.salary}</th>
                <th class="ext">Etc</th>
            </tr>
            `

    }
}
 const skillsbtn = document.getElementById("add-skill-btn")
const formFields = document.getElementById("form-fields")
skillsbtn.addEventListener("click", () => {
        formFields.innerHTML += `
            <input type="text" name="skills" placeholder="skills" id="skills" required>
        `
    })

