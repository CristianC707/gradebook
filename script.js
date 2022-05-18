const gradeEntryForm = document.getElementById("grade-entry-form");
const gradesTable = document.getElementById('grades-table')

const grades = JSON.parse(localStorage.getItem("grades")) || []


renderGradesTable();

function renderGradesTable() {
    gradesTable.innerHTML = '<tr> <th>First Name</th> <th>Last Name</th> <th>Grade</th> <th>Letter</th> </tr>'

    grades.forEach((grade) => {
        const tableRow = document.createElement('tr')
        tableRow.classList.add(getRowColor(grade.letter));
        tableRow.innerHTML = `<td class="cellstyle">${grade.firstName}</td>
        <td>${grade.lastName}</td>
        <td>${grade.grade}</td>
        <td>${grade.letter}</td>`
        gradesTable.appendChild(tableRow)
    });
}

function getRowColor(letter) {
    switch (letter) {
        case "A":
            return "green-row";

        case "B":
            return "yellow-row";

        case "C":
            return "blue-row";

        case "D":
            return "orange-row";

        case "F":
            return "red-row";
    };
};

function letterGrade(grade) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 70) {
        return 'C'
    } else if (grade >= 60) {
        return 'D'
    }
    else return 'F'
}

gradeEntryForm.addEventListener('submit', function (e) {
    e.preventDefault()
    // hide all error messages
    document.getElementById('blankError').classList.add('hide');
    document.getElementById('numError').classList.add('hide');


    const grade = {
        firstName: e.target[0].value, lastName: e.target[1].value,
        grade: e.target[2].value, letter: letterGrade(e.target[2].value)
    }

    const valid = validate(grade)
    if (valid) {

        addGrade(grade)

        for (let i = 0; i < 3; i++) {
            e.target[i].value = ""
        }
    }

});

function validate(grade) {
    //return true or false
    if (!grade.firstName || !grade.lastName || !grade.grade) {
        document.getElementById('blankError').classList.remove('hide');
        return false;
    }
    else if (isNaN(grade.grade)) {
        document.getElementById('numError').classList.remove('hide')
    }
    else {
        return true;
    }
}

function addGrade(grade) {
    grades.push(grade);

    grades.sort(function (x, y) {
        return y.grade - x.grade;
    });

    localStorage.setItem("grades", JSON.stringify(grades))


    renderGradesTable();
}


// ASSIGNMENT 2 ===========
// Add id's for delete function
// Add delete function
// Cant add same student twice
// Add to github pages

