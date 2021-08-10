import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-scroll'




const Nav = () => {
  const [nav] = React.useState([
    { id: 'home', navName: 'Home' },
    { id: 'about', navName: 'About' },
    { id: 'skills', navName: 'Skills' },
    { id: 'services', navName: 'Portofolio' },
    { id: 'contact', navName: 'Contact' }
   

  ])
  const [state, setState] = React.useState(false)
  return (
    <nav className="navbar"s>
      <div className="container">
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          <ul className="navbar_right">
              {nav.map(nv => (
                <li>
                  <Link to={nv.id} spy={true} smooth={true}><a className="cursor">{nv.navName}</a></Link>
                </li>
              ))}
            </ul>

          {state ? (
            <ul className="navbar_righthidden">
              {nav.map(nv => (
                <li>
                  <Link to={nv.id} spy={true} smooth={true}><a className="cursor">{nv.navName}</a></Link>
                </li>
              ))}
            </ul>) : ("")}

        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}><FaAlignJustify /></div>
    </nav>
  );
};

export default Nav;
