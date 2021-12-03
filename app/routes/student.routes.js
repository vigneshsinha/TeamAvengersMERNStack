module.exports = app => {
    const Students = require("../controllers/student.controller.js");

    var router = require("express").Router();

    router.post("/", Students.create);

    router.get("/", Students.findAllStudents);

    router.get("/:id", Students.findOne);

    router.put("/:id", Students.update);

    router.delete("/:id", Students.delete);

    router.delete("/", Students.deleteAll);

    app.use('/api/students', router);
}