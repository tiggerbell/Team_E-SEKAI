import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const nav = useNavigate();
    const SignUp = () => {
        nav("/signup");
    }
  return (
    <div>
        <button onClick={SignUp}>로그인하러가기</button>
    </div>
  )
}

export default Main