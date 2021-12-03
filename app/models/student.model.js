module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("Student", {
        Stu_firstname: {
            type: Sequelize.STRING
        },
        Stu_lastname: {
            type: Sequelize.STRING
        },
        Stu_id: {
            type: Sequelize.STRING
        },
        Course_name: {
            type: Sequelize.STRING
        }
    });

    return Student;
}