import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from 'react';
import { useLocation, createMemorySource, createHistory } from "@reach/router"
import { Spiral as Hamburger } from 'hamburger-react'


import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/colors.css'
import '../styles/fonts.css'
import '../styles/main.css'

import logo from '../images/elements/headliner.svg';



const DetailNav = ({ pageTitle, children }) => {
  const location = useLocation();
  const [state, setState] = useState({
    isHome: location.pathname === '/',
    // other states
  });

  const detectHome = () => {
    const homePath = location.pathname === '/';
    if (!homePath) {
      setState(prevState => ({
        ...prevState,
        isHome: false
      }));
    }
    if (homePath) {
      setState(prevState => ({
        ...prevState,
        isHome: true
      }));
    }
  };

  useEffect(() => {
    detectHome();
    return () => {
      detectHome();
    };
  }, [state.isHome]);

  console.log(state.isHome);

  return (
  <div className="d-sm-flex bg-lgreen">
  <Navbar expand="lg" fixed="top" className="bg-lgreen">
      <Navbar.Brand href="/" className="px-4 mx-3">
        <img
        src={logo}
        width="150"/> 
      </Navbar.Brand>

      <Navbar.Toggle className="mx-4" aria-controls="navbarScroll"><Hamburger size={30} color="#CEB27C" rounded/></Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll" aria-expanded="false">
        <Nav
          className="me-auto my-2 pb-xs-3 mx-auto bg-lgreen dgreen"
          navbarScroll
      >
          <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
              <Navbar.Text className="px-5 modesto dgreen">
                <Link to="/location">Location</Link>
              </Navbar.Text>
          </motion.a>
          {/* <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
              <Navbar.Text className="px-5 modesto dgreen">
                <Link to="/schedule">Schedule</Link>
              </Navbar.Text>
          </motion.a> */}
          <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
              <Navbar.Text className="px-5 modesto dgreen">
                <Link to="/registry">Registry</Link>
              </Navbar.Text>
          </motion.a>
          <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
              <Navbar.Text className="px-5 modesto dgreen">
                <Link to="/rsvp">RSVP</Link>
              </Navbar.Text>
          </motion.a>
          </Nav>
      </Navbar.Collapse>
  </Navbar>
</div>
  )
}
export default  DetailNav