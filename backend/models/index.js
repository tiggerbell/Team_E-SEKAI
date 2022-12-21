const Sequelize = require("sequelize");

const { config } = require("../config/config");
const User = require('./users');
const Nft = require('./nft');

const { database, username, password } = config.dev;

const sequelize = new Sequelize(database, username, password, config.dev);

const db ={}

db.sequelize = sequelize;
db.Nft = Nft;
db.User = User;

// 생성구문
User.init(sequelize);
Nft.init(sequelize);

module.exports = db;