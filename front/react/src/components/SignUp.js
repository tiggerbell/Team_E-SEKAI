import React, { useEffect } from 'react'
import classes from "./SignUp.module.css";



const SignUp = () => {
    // 본인 애플리케이션 rest key (REST API)
    const CLIENT_ID = "6ff5f59d59b0da4aabe80123d2586380";
    // "설정한 리다이렉트 URL을 넣어준다";
    const REDIRECT_URI = "http://localhost:8000/auth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
        <div className={classes["kakao-box"]}>
            <a href={KAKAO_AUTH_URL}>
                <div className={classes["kakao-btn"]}>
                </div>
            </a>
        </div>
    </div>
  )
}

export default SignUp

//6ff5f59d59b0da4aabe80123d2586380