const gradeEntryForm = document.getElementById("grade-entry-form");
const gradesTable = document.getElementById('grades-table')

const grades = JSON.parse(localStorage.getItem("grades")) || []


renderGradesTable();

function renderGradesTable() {
    gradesTable.innerHTML = '<tr> <th>First Name</th> <th>Last Name</th> <th>Grade</th> <th>Letter</th> </tr>'
    
    grades.forEach((grade) => {
        const tableRow = document.createElement('tr')
        tableRow.classList.add('rowstyle')
        tableRow.innerHTML = `<td class="cellstyle">${grade.firstName}</td>
        <td>${grade.lastName}</td>
        <td>${grade.grade}</td>
        <td>${grade.letter}</td>`
        gradesTable.appendChild(tableRow)
    });
}

function letterGrade(grade) {
    if(grade >=90){
        return 'A'
    } else if (grade >= 80){
        return 'B'
    } else if (grade >= 70){
        return 'C'
    } else if (grade >= 60){
        return 'D'
    } 
    else return 'F'
}

gradeEntryForm.addEventListener('submit', function (e) {
    e.preventDefault()

    grades.push({
        firstName: e.target[0].value, lastName: e.target[1].value,
        grade: e.target[2].value, letter: letterGrade(e.target[2].value)
    });

    grades.sort(function (x, y) {
        return y.grade - x.grade;
    });

    localStorage.setItem("grades", JSON.stringify(grades) )

    for (let i = 0; i < 3; i++) {
        e.target[i].value = ""
    }

    renderGradesTable();




});

// ASSIGNMENT 1 ============
// Color row based on letter

// ASSIGNMENT 2 ===========
// Add validation
// Add id's for delete function
// Add delete function 
// Cant add same student twice
// Add to github pages

