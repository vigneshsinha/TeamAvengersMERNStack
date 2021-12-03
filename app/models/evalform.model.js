module.exports = (sequelize, Sequelize) => {
    const evalForm = sequelize.define("Rating", {
        DisciplinaryKnowledge_value: {
            type: Sequelize.STRING
        },
        IntellectualCreativeSkills_value: {
            type: Sequelize.STRING
        },
        InterpersonalSkills_value: {
            type: Sequelize.STRING
        },
        GlobalCitizenship_value: {
            type: Sequelize.STRING
        },
        PersonalMastery_value: {
            type: Sequelize.STRING
        },
        Contributions_value: {
            type: Sequelize.STRING
        },
        Contributionpercent_value: {
            type: Sequelize.STRING
        },
        Improvement_value: {
            type: Sequelize.STRING
        },
        SchEvaluation_id: {
            type: Sequelize.STRING
        },
        StudentWriter_id: {
            type: Sequelize.STRING
        },
        StudentReciever_id: {
            type: Sequelize.STRING
        }
    });

    return evalForm;
}