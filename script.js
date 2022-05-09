const gradeEntryForm = document.getElementById("grade-entry-form");
const gradesTable = document.getElementById('grades-table')

const grades = [
    // {firstName: 'Anita', lastName: 'Hero', grade: 88},
    // {firstName: 'Daya', lastName: 'Bolical', grade: 90},
    // {firstName: 'Mike', lastName: 'Wisoski', grade: 99}
]

function renderGradesTable() {
    gradesTable.innerHTML = '<tr> <th>First Name</th> <th>Last Name</th> <th>Grade</th> </tr>'
    grades.forEach((grade) => {
        const tableRow = document.createElement('tr')
        tableRow.classList.add('rowstyle')
        tableRow.innerHTML = `<td class="cellstyle">${grade.firstName}</td>
        <td>${grade.lastName}</td>
        <td>${grade.grade}</td>`
        gradesTable.appendChild(tableRow)
    });
}

gradeEntryForm.addEventListener('submit', function (e) {
    e.preventDefault()

    grades.push({
        firstName: e.target[0].value, lastName: e.target[1].value,
        grade: e.target[2].value
    });

    for (let i=0; i<3; i++){
        e.target[i].value = ""
    }

    renderGradesTable();

});



