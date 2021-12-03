const db = require("../models");
const Course = db.Courses;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const course = {
        Course_id: req.body.Course_id,
        Course_name: req.body.Course_name,
        Course_term: req.body.Course_term,
        Course_year: req.body.Course_year,
        Prof_id: req.body.Prof_id,
        Course_start: req.body.Course_start,
        Course_end: req.body.Course_end,
        Course_day: req.body.Course_day
    };

    Course.create(course)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating course."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Course.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Course with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Course with id=" + id
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Course.update(req.body, {
        where: { Course_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Course updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Course with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating course with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Course.destroy({
        where: { Course_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Course deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Course with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete course with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Course.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} courses deleted` })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred deleting all courses."
            });
        });
};

exports.findAllCourses = (req, res) => {
    Course.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occured finding all courses."
            });
        });
};