import React from "react";
import { FaInstagram, FaPlay, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title1: "Hi, I am",
    title2: " Fauzan",
    text: "Web Developer",
    image: "/images/ucan2.png"
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header_content">
              <div className="header_section">
                <div className="flex_name">
                <h1 className="title1">{state.title1}              

                </h1>
                <h1 className="header_section-nama"><div >
                    {state.title2}
                  </div></h1>
                  </div>
                <p>{state.text}</p>

                <div className="header_buttons">
                  <a href="" className="btn btn-outline">
                    My Portofolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">

            <div className="banner_img">
              <div className="header_content2">
                <img src={state.image} alt="man" />
                  
                <ul className="header_ul">
                  <li>
                    <a href="https://www.instagram.com/mfauzanamzar_" className="bttn btn_ig"><FaInstagram /></a>
                  </li>
                  <li>
                    <a href="https://github.com/mfauzanamzar" className="bttn btn_ig"><FaGithub /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/muhammad-fauzan-amzar-980699209" className="bttn btn_ig"><FaLinkedin /></a>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
