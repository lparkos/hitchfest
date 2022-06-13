import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";

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



const MainNav = ({ pageTitle, children }) => {

  let isHome;
  const location = window.location.pathname;
  if (location === '/') {
    isHome = true;
  }

  return (
  <div class="sticky-top">
    {isHome ? ''
    : 
    <Navbar fixed="top" expand="lg" className="justify-content-center bg-lgreen headliner headliner-lm">
      <Navbar.Brand href="/home">
        <img
        src={logo}
        width="150"/> 
      </Navbar.Brand>
    </Navbar>
    }

    <Navbar expand="lg" fixed="top" className="text-center white bg-teal main-nav">
        <Container fluid className="justify-content-lg-center justify-content-xs-end text-center">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" aria-expanded="false">
            <Nav
              className="me-auto my-2 my-lg-0 justify-center mx-auto"
              navbarScroll
          >
              <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                  <Navbar.Text className="px-5 modesto">
                    <Link to="/location">Location & Accomodation</Link>
                  </Navbar.Text>
              </motion.a>
              <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                  <Navbar.Text className="px-5 modesto">
                    <Link to="/schedule">Schedule</Link>
                  </Navbar.Text>
              </motion.a>
              <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                  <Navbar.Text className="px-5 modesto">
                    <Link to="/registry">Registry</Link>
                  </Navbar.Text>
              </motion.a>
              <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                  <Navbar.Text className="px-5 modesto">
                    <Link to="/rsvp">RSVP</Link>
                  </Navbar.Text>
              </motion.a>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default  MainNav