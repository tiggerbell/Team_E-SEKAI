// 사용할 모듈 
// https://blogofpjj.tistory.com/47
// express, nodemon, sequelize, mysql2
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res)=>{
    res.json({ test : "HIHI"});
});



require("./routes/customer")(app);

app.listen(8000, ()=> {
    console.log("서버 열림ㅋ");
});