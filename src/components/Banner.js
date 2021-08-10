import React from "react";
import { FaInstagram, FaPlay, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-scroll'
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
     }, [])

  const [state] = React.useState({
    title1: "Hi, I am",
    title2: " Fauzan",
    text: "Web Developer",
    image: "/images/ucan2.png"
  });
  return (
    <header id="home" className="header">
      <div className="container">
        <div className="row">
          <div data-aos="slide-right" className="col-6">
            <div className="header_content">
              <div className="header_section">
                <div  className="flex_name">
                <h1 className="title1">{state.title1}              

                </h1>
                <h1 className="header_section-nama"><div >
                    {state.title2}
                  </div></h1>
                  </div>
                <p>{state.text}</p>

                <div className="header_buttons">
                  

                  <Link to='services' spy={true} smooth={true}><a className="btn btn-outline btn_porto">My Portofolio</a></Link>
                  &nbsp;&nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">

            <div className="banner_img">
                <LazyLoadImage
                     src={state.image}
                     effect="blur"
                     alt="foto"

                />
             
                  <div className="tes1">
                <ul data-aos="fade-zoom-in" className="header_ul">
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
