import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import netflixlogo from "../images/netflixlogo.png";
import landingdownload from "../images/landingdownload.jpg";
import homevideo from "../videos/homevideo.mp4";
import homevideo2 from "../videos/homevideo2.mp4";
import device from "../images/device.png";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
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
      <div className="devider" />
      {/* section: first row */}
      <div className="flex-container">
        <div className="text__box row1__col1">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="row1__col2">
          <video
            className="video__box"
            width="400"
            autoplay="autoplay"
            muted
            loop
          >
            <source src={homevideo} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div className="devider" />
      {/* section: second row */}
      <div className="flex-container">
        <div className="text__box row2__col1 ">
          <img src={landingdownload} className="img__box" alt="" />
        </div>
        <div className="row2__col2">
          <h1>
            Download your shows
            <br />
            to watch offline.
          </h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
      </div>
      <div className="devider" />
      {/* section: third row */}
      <div className="flex-container">
        <div className="text__box row1__col1">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="row1__col2">
          <video
            className="video__box"
            width="400"
            autoplay="autoplay"
            muted
            loop
          >
            <source src={homevideo2} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div className="devider" />
      {/* section: faq */}
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="faq__box">
          <p>What is Netflix?</p>
          <p>+</p>
        </div>
        <div className="faq__box">
          <p>How much does Netflix cost?</p>
          <p>+</p>
        </div>
        <div className="faq__box">
          <p>Where can I watch?</p>
          <p>+</p>
        </div>
        <div className="faq__box">
          <p>How do I cancel?</p>
          <p>+</p>
        </div>
        <div className="faq__box">
          <p>What can I watch on Netflix?</p>
          <p>+</p>
        </div>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
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
      </div>
      <div className="devider" />
      {/* section: footer */}
    </div>
  );
};

export default LoginScreen;
