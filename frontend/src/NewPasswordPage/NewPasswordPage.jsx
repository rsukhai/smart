import React from "react";
import "./NewPasswordPage.css";

const NewPasswordPage = () => {

    return (
        <div className="NewPasswordContainer">
            <div className="Container">
                <img
                    className="logInLogo"
                    src="../img/smartkids_logo2.png"
                    alt="logo"
                />
                <div className="NewPasswordText">Please, write your new password</div>
                <div className="NewPassword">
                    <input
                        type="text"
                        className="NewPasswordInput"
                        placeholder="New Password"
                    />
                    <input
                        type="text"
                        className="NewPasswordInput"
                        placeholder="New Password Again"
                    />
                </div>

                <button className="buttonGo">
                    Confirm
                </button>

            
            </div>
        </div>
    )
}


export default NewPasswordPage