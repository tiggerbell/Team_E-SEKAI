const dot = require("dotenv").config();

const config = {
    dev: {
      username: "root",
      password: process.env.DATABASE_PASSWORD,
      database: "e-sekai",
      host: "127.0.0.1", // 여기에 만약 우리가 AWS RDS 쓰거나 지원 데이터베이스 등등 사용을 한다면 이곳에 주소를 넣으면 됩니다.
      dialect: "mysql", // dial
    },
  };
  
  //여러개 내보낼때는 객체로 묶어서 내보내면 된다.
  module.exports = { config };