// 사용할 모듈 
// https://blogofpjj.tistory.com/47
// express, nodemon, sequelize, mysql2
const express = require('express');
const cors = require("cors");

const app = express();


app.listen(8000, ()=> {
    console.log("서버 열림ㅋ");
});