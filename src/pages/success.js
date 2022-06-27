import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from 'gatsby-plugin-transition-link'
import { Animate }  from 'react-simple-animate';
import PageLayout from '../components/page-layout'
import MainNav from '../components/nav'
import MenuBlock from '../components/menu-block'
import TextBlock from '../components/textblock'


import cornerleft from '../images/elements/corner-left.svg'
import universe from '../images/elements/universe.svg'
import cornerright from '../images/elements/corner-right.svg'
import cornerbright from '../images/elements/corner-b-right.svg'
import cornerbleft from '../images/elements/corner-b-left.svg'
import landm from '../images/elements/landm.svg'
import cosmicdate from '../images/elements/cosmic-date.svg'
import mspmn from '../images/elements/mspmn.svg'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/colors.css'
import '../styles/fonts.css'
import '../styles/main.css'


const Index = () => {

  return (
    <div className="main-container container-fluid vh-100" style={{overflow: 'hidden', position: 'fixed'}}>
        <div className="m-2 pt-2 pb-5">
        <div id='stars'></div>
         <div id='stars2'></div>
          <div id='stars3'></div>
        <div class="container-fluid position-relative">
        <div class="row align-items-start">
            <div class="col left-border">
            <img className="img-fluid" src={cornerleft}></img>
            </div>
            <div class="col text-center">
            <MainNav></MainNav>
            </div>
            <div class="col right-border text-end">
            <img className="img-fluid" src={cornerright}></img>
            </div>
        </div>
        </div>
        <div class="container-fluid position-absolute top-50 start-50 translate-middle">
        <div class="row align-items-start">
         <TextBlock 
            title="We'll see you soon!"
            contents="Yay! We're really excited to share this day with you!"
          ></TextBlock>
        </div>
        </div>
        <div class="container-fluid bottom-borders position-absolute bottom-0 start-50 translate-middle-x">
        <div class="row align-items-start">
            <div class="col left-border">
            <img className="img-fluid width-60" src={cornerbleft}></img>
            </div>
            <div class="col text-center">
            </div>
            <div class="col right-border text-end"> 
            <img className="img-fluid width-60" src={cornerbright}></img>
            </div>
        </div>
        </div>
    </div>
    <div className="fixed-bottom home-nav">
      <MenuBlock
        text="Location"
        link="location"
        color="bg-lgreen"
      ></MenuBlock>
      {/* <MenuBlock
        text="Schedule"
        link="shedule"
        color="bg-lgreen"
      ></MenuBlock> */}
      <MenuBlock
        text="Registry"
        link="registry"
        color="bg-lgreen"
      ></MenuBlock>
      <MenuBlock
        text="RSVP"
        link="rsvp"
        color="bg-lgreen"
      ></MenuBlock>
    </div>
    </div>
  )
}
export default Index