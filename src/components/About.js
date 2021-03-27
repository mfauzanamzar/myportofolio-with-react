import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.      Voluptatem"
  });

  const[owo] = React.useState([
      {id:1, title : 'Name', Text: "Muhammad Fauzan Amzar"},
      {id:2, title : 'Email', Text: "mfauzanamzar@gmail.com"},
      {id:3, title : 'Phone', Text: "0812 4861 5822"},
      {id:4, title : 'Linkeidn', Text: "Muhammad Fauzan Amzar"},
  ])

  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
        
        </div>
        <div className="commonBorder"></div>
      
      <div className="row h-650 alignCenter">
        <div className="col-6">
          <div className="about_img">
            <img src="/images/ucann.png" alt="man" />
          </div>
        </div>
        <div className="col-6">
          <div className="about_info">
            <h1>Hi There</h1>
            <div className="about_info-p1">
              Saya adalah Seorang Mahasiswa Teknik Informatika, Universitas Hasanuddin. Sedang berfokus menjadi Front-End Developer, dan ingin melanjutkan mempelajari Back-End Deveoper.
            </div>
            <div className="about_info-p2">
             
            </div>
            <div className="info_contacts">
            <div className="row">
            {owo.map(info=>(
                    <div className="col-6">
                    <strong>{info.title}</strong>
                    <p>{info.Text}</p>
                    </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </div>
  );
};

export default About;
