const connection = require("./connection");
const userData = require("./seed_data/user_data.json");

connection.Users.destroy({ where: {} }).then(() => {
    connection.Users.bulkCreate(userData).then(() => {
        process.exit();
    });
});