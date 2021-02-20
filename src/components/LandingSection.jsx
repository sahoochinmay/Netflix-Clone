import React from "react";
import "../views/LoginScreen.css";
import landingdownload from "../images/landingdownload.jpg";
import homevideo from "../videos/homevideo.mp4";
import homevideo2 from "../videos/homevideo2.mp4";

const LandingSection = ({updateSignIn}) => {
  return (
    <div>
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
                onClick={() => updateSignIn()}
              className="loginScreen__getStarted"
            >
              GET STARTED ▶
            </button>
          </form>
        </div>
      </div>
      <div className="devider" />
      {/* section: footer */}
      <section className="footer">
        <p>Questions? Call 000-800-040-1843</p>
        <section className="box__section">
          <div className="box">
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className="box">
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
          <div className="box">
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Netflix Originals</p>
          </div>
          <div className="box">
            <p>Media Centre</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
        </section>
        <select className="language" name="" id="">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <p>Netflix India</p>
      </section>
    </div>
  );
};

export default LandingSection;
