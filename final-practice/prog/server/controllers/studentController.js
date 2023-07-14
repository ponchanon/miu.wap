const Student = require('../models/student');

exports.addCourse = (req, res, next) => {
   const stu = new Student(req.params.studentId).addCourse(req.body);
   res.status(200).json(stu);
}

module.exports.getAverage = (req, res, next) => {
    res.json(Student.getAverage(req.params.stuId, req.query.semester));
}