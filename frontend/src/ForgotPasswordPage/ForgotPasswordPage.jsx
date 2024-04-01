import React from "react";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = () => {

    return (
        <div className="ForgotPasswordContainer">
            <div className="Container">
                <div className="Forgot">Forgot password?</div>
                <div className="ForgotText">Write your email and we will send you form to reset your password.</div>
                <div className="ForgotPassword">
                    <input
                        type="text"
                        className="EmailInput"
                        placeholder="Write your email"
                    />
                </div>

                <a href="/nwpswrd" className="buttonGo">Submit</a>
                

                <div className="loginBox">
                    <div className="moveToLoginLink">Back to</div>
                    <a href="/login" className="loginLink">Log In</a>
                </div>
            </div>
        </div>
    )
}


export default ForgotPasswordPage