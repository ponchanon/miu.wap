//"use strict";

// Problem 01
const student = {
	firstName: '',
	lastName: '',
	grades: [],
	inputNewGrade: function (newGrade) {
		this.grades.push(newGrade);
	},
	computeAverageGrade() {
		return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
	}
}

const student1 = Object.create(student);
student1.firstName = 'John';
student1.lastName = 'Smith';
student1.inputNewGrade(89);
student1.inputNewGrade(97);
student1.inputNewGrade(76);
student1.inputNewGrade(82);

const student2 = Object.create(student);
student2.firstName = 'Edward';
student2.lastName = 'Smith';
student2.inputNewGrade(82);
student2.inputNewGrade(93);
student2.inputNewGrade(80);
student2.inputNewGrade(79);

const students = [student1, student2];
const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);




// Problem 02
function Student(firstName, lastName, grades = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
	this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
	return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
}

const stu1 = new Student('John', 'Smith');
stu1.inputNewGrade(89);
stu1.inputNewGrade(97);
stu1.inputNewGrade(76);
stu1.inputNewGrade(82);

const stu2 = new Student('Edward', 'Smith');
stu2.inputNewGrade(82);
stu2.inputNewGrade(93);
stu2.inputNewGrade(80);
stu2.inputNewGrade(79);

const students2 = [stu1, stu2];
const result2 = students2.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result2);




// Problem 03
Array.prototype.sort = function () { return this.sort((a, b) => a - b); }
console.log([7, 5, 2, 4, 3, 9].newSort());