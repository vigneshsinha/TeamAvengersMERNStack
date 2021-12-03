module.exports = app => {
    const evalforms = require("../controllers/evalform.controller.js");

    var router = require("express").Router();

    // Create new evalform
    router.post("/", evalforms.create);

    // Retrieve all evalforms
    router.get("/", evalforms.findAllForms);

    // Retrieve single evalform with id
    router.get("/:id", evalforms.findOne);

    // Update tutorial with id
    router.put("/:id", evalforms.update);

    // Delete tutorial with id
    router.delete("/:id", evalforms.delete);

    // Delete all tutorials
    router.delete("/", evalforms.deleteAll);

    app.use('/api/evalforms', router);
};