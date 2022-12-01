// 사용할 모듈 
// express, nodemon, sequelize, mysql2
const express = require('express');
const axios = require("axios");
const cors = require("cors");

const app = express();

// const router = express.Router();
const KAKAO_OAUTH_TOKEN_API_URL = "https://kauth.kakao.com/oauth/token"
const KAKAO_GRANT_TYPE="authorization_code"
// const KAKAO_CLIENT_id="REST API 부분을 넣어준다."
const KAKAO_CLIENT_id="6ff5f59d59b0da4aabe80123d2586380";
const KAKAO_REDIRECT_URL="http://localhost:3000/signup";

app.post('/kakao/code', function (req, res) {
        let code = req.query.code;
        console.log(code);
        try{
            axios.post(
                `${KAKAO_OAUTH_TOKEN_API_URL}?grant_type=${KAKAO_GRANT_TYPE}&client_id=${KAKAO_CLIENT_id}&redirect_uri=${KAKAO_REDIRECT_URL}&code=${code}`
                , {
                 headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }).then((result)=>{
                console.log(result.data['access_token'])
                // 토큰을 활용한 로직을 적어주면된다.
    
            }).catch(e=> {
                console.log(e)
                res.send(e);
            })
        }catch(e){
            console.log(e)
            res.send(e);
        }
})

app.listen(8000, ()=> {
    console.log("서버 열림ㅋ");
});