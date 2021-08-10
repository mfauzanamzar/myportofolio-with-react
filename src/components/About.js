import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

  React.useEffect(() => {
    Aos.init({ duration: 2000})
     }, [])


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
    <div id="about" className="about">
      <div className="container">
        <div data-aos="fade" className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
        
        </div>
        <div  className="commonBorder"></div>
      
      <div className="row h-650 ">
        <div className="col-6">
          <div data-aos="fade-up" className="about_img">
          <LazyLoadImage
                     src="/images/ucann.png"
                     effect="blur"
                     alt="foto"
                     className="foto_about"

                />
         
          </div>
        </div>
        <div className="col-6">
          <div data-aos="slide-left" className="about_info">
           
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
