import Signup from "../Components/Signup";
import LoginComp from "../Components/Login";
import './LoginPage.css'
import { useState } from "react";

const LoginPage = () => {
    const [active, setActive] = useState('login')

    const handleClick = (mode) => {
        setActive(mode)
    }


    return (
        <div>
            <div className="login-button-container">
                <button className='login-button' onClick={()=> handleClick('login')}>Login</button>
                <button className='login-button' onClick={()=> handleClick('signup')}>Sign up</button>
            </div>
            {active==='login'?<LoginComp />:<Signup />}
        </div>
    )
}
export default LoginPage;

