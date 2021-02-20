import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import netflixlogo from "../images/netflixlogo.png";
import LandingSection from "../components/LandingSection";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const updateSignIn = () =>{
    setSignIn(true)
  }
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src={netflixlogo}
          alt="netflix logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient">
          <div className="loginScreen__body">
            {signIn ? (
              <SignUpScreen />
            ) : (
              <>
                <h1>
                  Unlimited movies, TV <br />
                  shows and more.
                </h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="loginScreen__input">
                  <form action="">
                    <input type="email" placeholder="Email Address" />
                    <button
                      onClick={() => setSignIn(true)}
                      className="loginScreen__getStarted"
                    >
                      GET STARTED ▶
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {signIn ? null : <LandingSection updateSignIn={updateSignIn} />}
    </div>
  );
};

export default LoginScreen;
