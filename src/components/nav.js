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

const MainNav = ({ pageTitle, children }) => {
  return (
  <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid className="justify-content-center text-center bg-teal">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-center mx-auto text-center yellow"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                <Nav.Link href="/" class="px-2"><p class="modesto">Home</p></Nav.Link>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                <Nav.Link href="/location" class="px-2"><p class="modesto">Location & Accomodation</p></Nav.Link>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                <Nav.Link href="/schedule" class="px-2"><p class="modesto">Schedule</p></Nav.Link>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                <Nav.Link href="/registry" class="px-2"><p class="modesto">Registry</p></Nav.Link>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, opacity: 1 }}>
                <Nav.Link href="/rsvp" class="px-2"><p class="modesto">RSVP</p></Nav.Link>
            </motion.a>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default  MainNav