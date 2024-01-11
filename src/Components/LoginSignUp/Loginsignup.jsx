import React, { useState } from "react";
import './Loginsignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
// use state is a react hook that alows functional components to manage and update state variables. Enables them to keep track of changing data within the component
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {/* hiding  name from login*/}
                {action==="Login"?<div></div>: <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name"/>
                </div>}

                {/* this previously displayed the name bar in both login/signup  
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name"/>
                </div> */}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email"/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {/* hiding forgot password from sign up */}
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div> }
            {/* <div className="forgot-password">Lost Password? <span>Click Here!</span></div> */}
            <div className="submit-container">
                {/* use operator from above in if else format seen below */}
                {/* if the action is login, the class will be submit gray, otherwise it will just be submit */}
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                {/* if the action is sign up, the class will be submit gray, otherwise it will just be submit */}
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup