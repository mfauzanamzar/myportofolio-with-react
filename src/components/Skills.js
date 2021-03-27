import React from "react";


const Skills = () => {
  
  return (
    <div className="Skills">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="mainHeader">Let's Work Together</h1>
          </div>
          <div className="col-6">
            <h3 className="heading">I'M EXPERT ON</h3>
            <div className="skills_bar">
            <li>
                <h3>HTML5</h3><span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <h3>CSS</h3><span className="bar"><span className="css"></span></span>
            </li>
            <li>
                <h3>JavaScript</h3><span className="bar"><span className="js"></span></span>
            </li>
            <li>
                <h3>React JS</h3><span className="bar"><span className="reactjs"></span></span>
            </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
