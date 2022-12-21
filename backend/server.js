// 사용할 모듈 
// https://blogofpjj.tistory.com/47
// express, nodemon, sequelize, mysql2


const express = require('express');
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}))


app.listen(8000, ()=> {
    console.log("서버 열림 8000번");
});

app.use(express.json());
app.use(cors());


//react 앞단 갖다쓸 경로 지정
app.use(express.static(path.join(__dirname, 'front/react/build')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../front/react/build/index.html'))
})

// 리액트 라우터로도 url 따라 페이지 보여주는 설정
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../front/react/build/index.html'))
})


// db 데이터 뽑아서 보내주는 API
// react에서 여기로 get요청만 보내면된다
app.get('/nfts', function(req, res){
    res.json({

    })
})