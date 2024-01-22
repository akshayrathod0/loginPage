import "./Login.css";
import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import{BsTwitterX} from 'react-icons/bs';

function Login(){
    const [passwordType, setPasswordType] = useState('password'); 
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash/>);

    const handleToggle=()=>{
        if(passwordType==='password'){
            setPasswordType('text');
            setPasswordIcon(<FaEye/>);
        }else{
            setPasswordType('password');
            setPasswordIcon(<FaEyeSlash/>);
        }
    }
   return (
    <div className="main_container">
        <div className="left_side">
            <div className="left_side_contains">
                <h1>Welcome Back</h1>
                <hr></hr>
                <h3>Login to continue your account</h3>
            </div>
        </div>
        <form className="main_div">
            <h1>Login</h1>    
            <div className="inputWithIcon">
                <FaUser className="icon" />
                <input type="text" name="username" className="username" placeholder="Enter Username"/><br/>
            </div>
            <div className="inputWithIcon">
                <span className='eyeIcon' onClick={handleToggle}>
                                {passwordIcon}
                </span>
                <FaLock className="icon" />
                <input type={passwordType} name="password" className="password" placeholder="Enter Password"/><br/>

            </div>
            <label className="forget_password">forget password</label>
            <button>Login</button><br/>
            <div className="remember_me">
                <input type="checkbox" /> 
                <label>Remember Me</label><br/>
            </div>
            <label>Don't have a account? <span>Sign Up</span></label><br/>
            <h4 className="title">or</h4><br/>

            <div className="social_icon">
                <a href="#google" className="google"><FcGoogle /></a>
                <a href="#twitter" className="twitter"><BsTwitterX /></a>
                <a href="#twitter" className="twitter"><FaFacebook /></a>
                <a href="#twitter" className="twitter"><FaLinkedin /></a>
            </div>
        </form>
        
    </div>
   )
}
export default Login;