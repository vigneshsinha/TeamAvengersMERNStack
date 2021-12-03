module.exports = {
    HOST: "34.138.196.197",
    USER: "root",
    PASSWORD: "password",
    DB: "SingaporeManagementUniversity",
    PORT: "3306",
    dialect: "mysql",
    pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};