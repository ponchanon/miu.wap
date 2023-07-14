const express = require('express');
const router = express.Router();

//place your code below
const studentController = require('../controllers/studentController');

router.post('/:studentId/courses', studentController.addCourse);
router.get('/:stuId/getAverage', studentController.getAverage);




module.exports = router;