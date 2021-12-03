const db = require("../models");
const Student = db.Students;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const student = {
        Stu_firstname: req.body.Stu_firstname,
        Stu_lastname: req.body.Stu_lastname,
        Stu_id: req.body.Stu_id,
        Course_name: req.body.Course_name
    };

    Student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Error occurred while creating Student."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id)
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
                message: "Error retrieving student with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Student.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Student updated succesfully."
                });
            } else {
                res.send({
                    message: `Cannot update student with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error updating student with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Student successfully deleted."
                });
            } else {
                res.send({
                    message: "Student deletion unsuccessful."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Couldn't delete student."
            });
        });
};

exports.deleteAll = (req, res) => {
    Student.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} students deleted.`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occured while removing all students.  "
            })
        })
};

exports.findAllStudents = (req, res) => {
    Student.findAll() 
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred finding all students."
            });
        });
};