module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("Course", {
        Course_id: {
            type: Sequelize.STRING
        },
        Course_name: {
            type: Sequelize.STRING
        },
        Course_term: {
            type: Sequelize.STRING
        },
        Course_year: {
            type: Sequelize.STRING
        },
        Prof_id: {
            type: Sequelize.STRING
        },
        Course_start: {
            type: Sequelize.STRING
        },
        Course_end: {
            type: Sequelize.STRING
        },
        Course_day: {
            type: Sequelize.STRING
        }
    });

    return Course;
}