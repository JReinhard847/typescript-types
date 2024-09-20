type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    first_name: string,
    last_name: string,
    age: number,
    grades: Grade_list
}

interface Grade_list {
    [key: string]: Grade[]
}


function print_student(student: Student): void {
    console.log(`${student.first_name} ${student.last_name} (${student.age})`)
    console.log("=".repeat(4 + student.first_name.length + student.last_name.length + ("" + student.age).length))
    console.log("Noten:")
    Object.keys(student.grades)
        .forEach(subject => console.log(subject + ": " + student.grades[subject].map(grade => (grade === undefined) ? "*" : grade)))
}

const student1: Student = {
    first_name: "Anton",
    last_name: "Meier",
    age: 17,
    grades: {
        "Mathe": [1, 2, 3, 4, "E", 6, undefined],
        "Informatik": [1, 2, 3, 4, "E", 6, undefined]
    }
}
const student2: Student = {
    first_name: "Berta",
    last_name: "Müller",
    age: 16,
    grades: {
        "Sport": [1, 2, 3, 4, 6, "A"]
    }
}

const student_list: Student[] = [student1, student2]

function print_student_list(students: Student[]): void {
    students.forEach(print_student)
}

function calculate_average_grade(student: Student): number {
    let res = Object.values(student.grades)
        .map(grades => grades.filter(grade => grade !== undefined))
    let len: number = 0
    res.forEach(grades => len += grades.length)
    let sum = res.map(subject_grades => subject_grades.map(grade => {
            switch (grade) {
                case "A":
                    return 1
                case "B":
                    return 2
                case "C":
                    return 3
                case "D":
                    return 4
                case "E":
                    return 5
                case "F":
                    return 6
                default:
                    return grade
            }
        }).reduce((a, b) => a + b, 0)
    )
        .reduce((a, b) => a + b, 0)
    return sum / len
}

console.log(calculate_average_grade(student1))


// print_student(student1)
print_student_list(student_list)
