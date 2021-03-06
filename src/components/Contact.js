import React from "react";
import { FaMapMarked, FaPhone } from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

  React.useEffect(() => {
    Aos.init({ duration: 2000})
     }, [])

  const [state] = React.useState({
    title1: "Hi, I am",
    title2: " Fauzan",
    text: "Web Developer",
    image: "/images/ucan2.png"
  });
  

  const [cont] = React.useState([
    {
      id: 1,
      heading: "Locate Me",
      icon: <FaMapMarked />,
      text:
        "Makassar, Sulawesi Selatan.",
      link: "https://goo.gl/maps/TNa3AgsyCdTLKdbg8"
    },
    {
      id: 2,
      icon: <FaPhone />,
      heading: "Give me a call",
      text:
        "+62 812 4861 5822",
      link: "tel:+62-812-4861-5822"
    }


  ]);
  return (
    <div id="contact" className="Contact">
      <div className="container">
        <div className="contact_header">
          <div data-aos="fade-up" className="common">
            <h3 className="heading">HAVE ANY QUERY?</h3>
            <h1 className="mainHeader">Contact Me</h1>
            <div className="commonBorder"></div>
          </div>
        </div>

        <div data-aos="slide-right"  className="row">
          {cont.map(con => (
            <div className="col-6">
              <div className="contact_box">
                <div className="flex_header">
                  <div className="commonIcons">{con.icon}</div>
                  <div className="notflex_header">
                    <a href={con.link} > <div className="contact_box-header">{con.heading}</div></a>
                    <div className="contact_box-p">{con.text}</div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        <form  data-aos="fade-up"
          name="form3"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
         
        >
          <input type="hidden" name="form-name" value="form3"/>
          <div hidden>
            <input name="bot-field"/>
          </div>
        <div className="row">
         
            <div className="col-6">

              <input className="collumn1 h-c4" type="text" name="name" placeholder="Your Name" />


            </div>
            <div className="col-6">

              <input className="collumn1 h-c3" type="text" name="email" placeholder="Your Email" />


            </div>



            <div className="col1">

              <input className="collumn2 h-c1" type="text" name="subject" placeholder="Your Subject" />


            </div>
            <div className="col1">

              <textarea className="collumn2 h-c2" name="message" placeholder="Your Message" ></textarea>


            </div>
         
        </div>
       
        <button type="submit" className="btn_contact btn-outline">Send Message</button>

        </form>

      </div>
    </div>
  );
};

export default Contact;



