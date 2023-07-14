let students = [
    {
        "studentId": "610001",
        "firstname": "John",
        "lastname": "Smith",
        "courses": [
            {
                "courseId": "CS303",
                "coursename": "Web Application Programming in JavaScript",
                "semester": "2021-Spring",
                "grade": 99
            },
            {
                "courseId": "CS445",
                "coursename": "Modern Asynchronous Programming",
                "semester": "2021-Spring",
                "grade": 95
            },
            {
                "courseId": "CS472",
                "coursename": "Modern Asynchronous Programming",
                "semester": "2023-Spring",
                "grade": 95
            }
        ]
    },
    {
        "studentId": "610002",
        "firstname": "Edward",
        "lastname": "Jack",
        "courses": [
            {
                "courseId": "CS472",
                "coursename": "Web Application Programming",
                "semester": "2021-Spring",
                "grade": 82
            },
            {
                "courseId": "CS544",
                "coursename": "Web Application Architecture",
                "semester": "2021-Spring",
                "grade": 88
            }
        ]
    }
];

module.exports = class Student {

    constructor(studentId, firstname, lastname, courses) {
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;
    }


    addCourse(course) {
        const student = students.find(stu => stu.studentId == this.studentId);
        if (student) {
            const index = student.courses.findIndex(c => c.courseId == course.courseId);
            if (index > -1) {
                student.courses[index] = course;
            } else {
                student.courses.push(course);
            }
            return student;
        } else {
            throw new Error(`Student doesn’t exist with ID: ${this.studentId}`);
        }
    }

    static getAverage(studentId, semester) {
        const student = students.find(stu => stu.studentId == studentId);

        if (student) {
            let courses;
            if(semester){
                courses = student.courses.filter(c => c.semester == semester);
            } else{
                courses = student.courses;
            }
            if(courses.length === 0) {
                return {average: `couldn't find semester ${semester}`}
            } else {
                const average = courses.reduce((avg, current, index, arr) => avg + current.grade / arr.length, 0);
                return {average};
            }
            
        } else {
            throw new Error(`Student doesn't exist with ID: ${studentId}`);
        }

    }

}