import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {

    return (
        <section className="signup">
            <form className="sign-left">
                <h1>Login to Your Account</h1>
                <p>Login using your social networks</p>
                <div className="socials">
                    <div className="facebook"><i className="bi-facebook"></i></div>
                    <div className="google"><i className="bi-google"></i></div>
                    <div className="twitter"><i className="bi-twitter"></i></div>
                </div>
                <div className="or">
                 <p>OR</p>
                 <span></span>
                </div>
                <div className="input">
                     <input type="text" placeholder="Email"/>
                     <input type="text" placeholder="Password"/>
                </div>
                <div className="sign-btn">
                    <button>Sign In</button>
                </div>
                <NavLink to="/home">Home</NavLink>
            </form>
            <div className="sign-right">
                <h1>New Here?</h1>
                <p>Sign up and discover a great amount of new opportunities</p>
                <button>Sign Up</button>
            </div>
        </section>
    )
}

export default SignUp;