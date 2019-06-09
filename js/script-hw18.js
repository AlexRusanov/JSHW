const createStudent = () => {
    let student = {};
    student.name = prompt('Enter students name');
    student.lastName = prompt('Enter students last name');
    return student;
}

const fillStudentsTable = (student) => {
    let discipline,
        grade;

    student.table = {};

    while (discipline !== null) {
        let discipline = prompt('Enter discipline');

        if (discipline === null) break;

        let grade = +prompt('Enter grade');

        student.table[discipline] = grade;
    }

    return student;
};

const isTransferredToNextCourse = (student) => {
    let badGradeCount = 0;

    for (let discipline in student.table) {
        if (student.table[discipline] < 4) badGradeCount++;
    }

    if (badGradeCount === 0) {
        alert('Студент переведен на следующий курс')
    } else {
        alert('Студент НЕ переведен на следующий курс!!!')
    }
};

const getGradePointAverage = (student) => {
    let gradePointAverage = 0,
        disciplineCount = 0;

    for (let [discipline, grade] of Object.entries(student.table)) {
        disciplineCount++;
        gradePointAverage += grade;
    }

    gradePointAverage /= disciplineCount;

    if (gradePointAverage > 7) {
        alert('Студенту назначена стипендия');
    } else {
        alert('Студенту НЕ назначена стипендия!!!');
    }
};

let stud = createStudent();

let studWithTable = fillStudentsTable(stud);
console.log(studWithTable);
console.log(studWithTable.table);