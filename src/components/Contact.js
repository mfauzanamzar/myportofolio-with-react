import React from "react";
import { FaMapMarked, FaPhone } from "react-icons/fa";

const Contact = () => {
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
      link: "https://goo.gl/maps/bNutsXBkKWMQ3cp47"
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
    <div className="Contact">
      <div className="container">
        <div className="contact_header">
          <div className="common">
            <h3 className="heading">HAVE ANY QUERY?</h3>
            <h1 className="mainHeader">Contact Me</h1>
            <div className="commonBorder"></div>
          </div>
        </div>

        <div className="row">
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
        <form
          name="form1"
          method="post"
          data-netlify="true"
          onSubmit="submit"

        >
          <input type="hidden" name="form-name" value="form1" />
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Contact;



