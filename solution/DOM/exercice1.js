

function affiche() {
    const employeesTbody = document.getElementById("employees-tbody")
    for (let e of employees) {
        employeesTbody.innerHTML += `
                <tr class="flex flex-col bg-green-100">
                <th>${e.firstName}</th>
                <th>${e.lastName}</th>
                <th>${e.department}</th>
                <th>${e.position}</th>
                <th>${e.salary}</th>
                <th class="ext">Etc</th>
            </tr>
            `
    }
    hidden()

}
function hidden() {
    const showall = document.getElementById("showall")
    const hiddenall = document.getElementById("hiddenall")
    const employeesContainer = document.getElementById("employees-container")
    const employeesTable = document.getElementById("employees-table")
    hiddenall.addEventListener("click",()=>{
        employeesTable.classList.add("show")
    })
    showall.addEventListener("click",()=>{
        employeesTable.classList.remove("show")
    })
}

hidden()
affiche()
