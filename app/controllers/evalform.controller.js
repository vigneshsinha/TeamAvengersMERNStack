// const db = require("../models");
// const EvalForm = db.evalForm;
// // const Ratings = db.Ratings
// const Op = db.Sequelize.Op;
// // const Op = Sequelize.Op;

// // Create and save new EvalForm
// exports.create = (req, res) => {
//     if (!req.body.StudentReceiver_id) {
//         res.status(400).send({
//             message: "Need a student to evaluate."
//         });
//         return;
//     }

//     // Create an EvalForm
//     const evalform = {
//         DisciplinaryKnowledge_value: req.body.DisciplinaryKnowledge_value,
//         IntellectualCreativeSkills_value: req.body.IntellectualCreativeSkills_value,
//         InterpersonalSkills_value: req.body.InterpersonalSkills_value,
//         GlobalCitizenship_value: req.body.GlobalCitizenship_value,
//         PersonalMastery_value: req.body.PersonalMastery_value,
//         Contributions_value: req.body.Contributions_value,
//         Contributionpercent_value: req.body.Contributionpercent_value,
//         Improvement_value: req.body.Improvement_value,
//         SchEvaluation_id: req.body.SchEvaluation_id,
//         StudentWriter_id: req.body.StudentWriter_id,
//         StudentReceiver_id: req.body.StudentReceiver_id
//     };

//     // Save EvalForm in database
//     EvalForm.create(evalform)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error occurred while creating evalform."
//             });
//         });
// };

// // // Retrieve all EvalForms from the db.
// exports.findAllForms = (req, res) => {
//     const student = req.query.StudentReceiver_id;
//     var condition = student ? { student: { [Op.like]: `%${student}%` } } : null;

//     EvalForm.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error occurred while retrieving evalforms."
//             });
//         });
// };

// // Find single EvalForm with StudentReceiver_id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     EvalForm.findByPk(id)
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find EvalForm with id=${id}`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrivieving with id=" + id
//             });
//         });
// };

// // Update single EvalForm with StudentReceiver_id
// exports.update = (req, res) => {
//     const id = req.params.id;

//     EvalForm.update(req.body, {
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "EvalForm updated successfully"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot updated evalform with id=${id}`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error upating tutorial with id=" + id
//             });
//         });
// };

// // Delete EvalForm with specified StudentReceiver_id
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     EvalForm.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Evalform deleted."
//                 });
//             } else {
//                 res.send({
//                     message: `Can't delete with id=${id}`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Couldn't delete evalform with id=" + id
//             });
//         });
// };

// // Delete all EvalForms
// exports.deleteAll = (req, res) => {
//     EvalForm.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} evalforms deleted.` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error while removing all evalforms."
//             });
//         });
// };

// // Find all EvalForms
// exports.findAllForms = (req, res) => {
//     EvalForm.findAll()
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error occurred while retrieving all evalforms."
//             });
//         });
// };

const db = require("../models");
const evalForm = db.Ratings
// const Op = db.Sequelize.Op;

// Create and save new EvalForm
exports.create = (req, res) => {
    // if (!req.body.StudentReceiver_id) {
    //     res.status(400).send({
    //         message: "Need a student to evaluate."
    //     });
    //     return;
    // }

    // Create an EvalForm
    const evalform = {
        DisciplinaryKnowledge_value: req.body.DisciplinaryKnowledge_value,
        IntellectualCreativeSkills_value: req.body.IntellectualCreativeSkills_value,
        InterpersonalSkills_value: req.body.InterpersonalSkills_value,
        GlobalCitizenship_value: req.body.GlobalCitizenship_value,
        PersonalMastery_value: req.body.PersonalMastery_value,
        Contributions_value: req.body.Contributions_value,
        Contributionpercent_value: req.body.Contributionpercent_value,
        Improvement_value: req.body.Improvement_value,
        SchEvaluation_id: req.body.SchEvaluation_id,
        StudentWriter_id: req.body.StudentWriter_id,
        StudentReceiver_id: req.body.StudentReceiver_id
    };

    // Save EvalForm in database
    evalForm.create(evalform)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating evalform."
            });
        });
};

// // Retrieve all EvalForms from the db.
// exports.findAll = (req, res) => {
//     const student = req.query.StudentReceiver_id;
//     var condition = student ? { student: { [Op.like]: `%${student}%` } } : null;

//     evalForm.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error occurred while retrieving evalforms."
//             });
//         });
// };

// Find single EvalForm with StudentReceiver_id
exports.findOne = (req, res) => {
    const id = req.params.id;

    evalForm.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find EvalForm with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrivieving with id=" + id
            });
        });
};

// Update single EvalForm with StudentReceiver_id
exports.update = (req, res) => {
    const id = req.params.id;

    evalForm.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "EvalForm updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot updated evalform with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error upating tutorial with id=" + id
            });
        });
};

// Delete EvalForm with specified StudentReceiver_id
exports.delete = (req, res) => {
    const id = req.params.id;

    evalForm.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Evalform deleted."
                });
            } else {
                res.send({
                    message: `Can't delete with id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Couldn't delete evalform with id=" + id
            });
        });
};

// Delete all EvalForms
exports.deleteAll = (req, res) => {
    evalForm.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} evalforms deleted.` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error while removing all evalforms."
            });
        });
};

// // Find all EvalForms
exports.findAllForms = (req, res) => {
    evalForm.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while retrieving all evalforms."
            });
        });
};