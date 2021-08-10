import React from "react";
import { FaGithub } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {

  React.useEffect(() => {
    Aos.init({ duration: 2000})
     }, [])

  const [header] = React.useState({

    subHeading: "My Portofolio",

  });
  const [state] = React.useState([
    {
      id: 1,
      image: "/images/covid.PNG",
      heading: "Informasi Covid-19 Indonesia",
      text:
        "Website informasi kasus Covid-19 di Indonesia Total dan per Provinsi"
    },
    {
      id: 2,
      icon: <FaGithub />,
      heading: "-",
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.      Voluptatem"
    },

  ]);

  return (
    <div className="services">
      <div className="container_service">
        <div className="services_header">
          <div data-aos="slide-right" className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>

            <div className="commonBorder"></div>
          </div>

        </div>

        <div className="row bgMain">
          {state.map(info => (
            <div className="col-4 bgMain">
              <a className="link_box" href="https://indonesia-covid-19.netlify.app/">
                <div data-aos="fade-up" className="services_box">
                  <div className="commonImage">
                    <LazyLoadImage
                    className="box_image"
                      src={info.image}
                      effect="blur"
                      alt="foto"
                     
                    
                    />
                  </div>
                  <div className="service_box-header">{info.heading}</div>
                  <div className="service_box-p">
                    {info.text}
                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;
