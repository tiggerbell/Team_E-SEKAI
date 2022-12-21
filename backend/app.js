// 사용할 모듈 
// https://blogofpjj.tistory.com/47
// express, nodemon, sequelize, mysql2

const express = require('express');
const cors = require("cors");
const path = require('path');

const bodyParser = require('body-parser');
const fs = require("fs");

const { sequelize, User, Nft } = require("./models");

const errorController = require('./controllers/error')
const adminRoutes = require('./routes/admin-routes');
const userRoutes = require('./routes/users-routes');
const shopRoutes = require('./routes/shop-routes')

const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use("/static", express.static(__dirname));


app.listen(PORT, ()=> {
    console.log(PORT, "서버 열림");
});

app.use(express.json());
app.use(cors());

app.use(errorController.get404);

app.use('/admin', adminRoutes);

sequelize
  .sync({ force:false })
  .then(() => {
    console.log("DB연결 성공");
    // initDbMultiple();
  })
  .catch((err) => {
    console.log(err);
  });


app.get('/admin/nfts',(req, res) =>{
    res.send([
        
    ])
})



// //react 앞단 갖다쓸 경로 지정 빌드한 html 경로 써주면 됨
// app.use(express.static(path.join(__dirname, 'front/react/build')));

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '../front/react/build/index.html'))
// })

// // 리액트 라우터로도 url 따라 페이지 보여주는 설정
// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, '../front/react/build/index.html'))
// })




// db 데이터 뽑아서 보내주는 API
// react에서 여기로 get요청만 보내면 된다
// app.get('/nfts', function(req, res){
//     res.json({

//     })
// })