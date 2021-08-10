import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import "aos/dist/aos.css";


const Skills = () => {

  React.useEffect(() => {
    Aos.init({ duration: 2000})
     }, [])

  return (
    <div id="skills" className="Skills">
      <div className="container">
        <div className="row">
          <div className="col-6">
        
            <div data-aos="fade"  className="about_img img_skill">
          <LazyLoadImage
                     src="/images/skill.png"
                     effect="blur"
                     alt="foto"

                />
                </div>
          </div>
          <div data-aos="fade-up" className="col-6">
          <h1 className="mainHeader">Let's Work Together</h1>
            <h3 className="heading">I'M EXPERT ON</h3>
            <div className="skills_bar">
              <li>
                <h3>HTML5</h3>
              </li>
              <li>
                <h3>CSS</h3>
              </li>
              <li>
                <h3>JavaScript</h3>
              </li>
              <li>
                <h3>React JS</h3>
              </li>
              <li>
                <h3>Next JS</h3>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
