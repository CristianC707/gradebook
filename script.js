const gradeEntryForm = document.getElementById("grade-entry-form");
const gradesTable = document.getElementById('grades-table')

const grades = [
    {firstName: 'Anita', lastName: 'Hero', grade: 88},
    {firstName: 'Daya', lastName: 'Bolical', grade: 90},
    {firstName: 'Mike', lastName: 'Wisoski', grade: 99}
]

grades.forEach((grade)=>{
    const tableRow = document.createElement('tr')
    tableRow.classList.add('rowstyle')
    tableRow.innerHTML= `<td class="cellstyle">${grade.firstName}</td>
    <td>${grade.lastName}</td>
    <td>${grade.grade}</td>`
    gradesTable.appendChild(tableRow)
})

gradeEntryForm.addEventListener('submit', function (e) {
   e.preventDefault()
   
    console.log(e.target[0].value);
});


