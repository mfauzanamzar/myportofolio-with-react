import React, { Component } from 'react'
import "./App.css";
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <About />
        <Skills />
        <Services/>
        <Contact />
      </div>
    )
  }
}
