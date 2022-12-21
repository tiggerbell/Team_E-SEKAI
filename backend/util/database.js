const Sequelize = require('sequelize');

const sequelize = new Sequelize('e-sekai', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;