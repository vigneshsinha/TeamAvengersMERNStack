const express = require("express");
const cors = require("cors");

const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));

var corsOptions = {
    origin: "http://localhost:8020"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-synch db.");
// });

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to SMU App backend"});
});

require("./app/routes/evalform.routes.js")(app);
require("./app/routes/course.routes.js")(app);
require("./app/routes/student.routes.js")(app);

const PORT = process.env.PORT || 8020;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});