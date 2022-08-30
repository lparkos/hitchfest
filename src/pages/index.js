import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from 'gatsby-plugin-transition-link'
import { Animate }  from 'react-simple-animate';
import PageLayout from '../components/page-layout'
import MainNav from '../components/nav'
import MenuBlock from '../components/menu-block'
import CarouselGallery from '../components/carousel'
import DiscoBall from '../components/discoball'
import Schedule from '../components/schedule'
import Scroll from '../components/scroll'


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
import '../styles/mobile.css'


const Index = () => {

  return (
    <div className="container-fluid">
      {/* BORDERS TOP */}
      <div className="container-fluid d-flex my-2 borders-top position-fixed top-zero">
        <div className="left-border w-50">
          <img className="width-60" src={cornerleft}></img>
        </div>
        <div className="right-border w-50 text-end">
          <img className="width-60" src={cornerright}></img>
        </div>
      </div>
      <div className="frame-top"></div>

      {/* NAV */}
      <div className="main-nav">
        <MainNav></MainNav>
      </div> 

      {/* STARS */}
      <div className="mobile-main-container position-fixed top-zero">
        <span className="container-bg"></span>
        <div id='stars' className="position-fixed"></div>
        <div id='stars2' className="position-fixed"></div>
        <div id='stars3' className="position-fixed"></div>

        {/* HEADLINE */}
      <div className="container-fluid headliner position-fixed">
        <div clasName="position-absolute top-50 start-50 translate-middle">
            <Animate
            play={true} // set play true to start the animation
            duration={.5} // how long is the animation duration
            delay={0.2} // how many delay seconds will apply before the animation start
            start={{ opacity: '0', transform: 'translate(0px, 0px) scale(1.4)'}}
            end={{ opacity: '1', transform: 'translate(0px, 10px) scale(.9)' }}
            easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            >
            <div className="text-center width-75 align-top">
            <img className="img-fluid" src={landm}></img>
            </div>
            </Animate>
            <Animate
            play={true} // set play true to start the animation
            duration={.3} // how long is the animation duration
            delay={0.3} // how many delay seconds will apply before the animation start
            start={{ opacity: '0', transform: 'translate(0px, 0px) scale(1)'}}
            end={{ opacity: '1', transform: 'translate(0px, 10px) scale(.9)' }}
            easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            >
            <div className="text-center width-60 align-top">
            <img className="img-fluid" src={cosmicdate}></img>
            </div>
            </Animate>
            <Animate
            play={true} // set play true to start the animation
            duration={.5} // how long is the animation duration
            delay={0.3} // how many delay seconds will apply before the animation start
            start={{ opacity: '0', transform: 'translate(0px, 0px) scale(1)'}}
            end={{ opacity: '1', transform: 'translate(0px, 10px) scale(.9)' }}
            easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            >
            <div className="text-center width-60 align-top">
            <img className="img-fluid" src={mspmn}></img>
            </div>
            </Animate>
        </div>
        <Scroll></Scroll>
      </div>
      </div>

      

      {/* CAROUSEL */} 
      <div className="container-fluid headliner carousel-moving">
        <div className="scrolling-image">
        </div>
        {/* <CarouselGallery></CarouselGallery> */}
      </div>

    {/* MOBILE NAV */} 
    <div className="fixed-bottom home-nav">
      <MenuBlock
        text="Location"
        link="location"
        color="bg-lgreen"
      ></MenuBlock>
      <MenuBlock
        text="RSVP"
        link="rsvp"
        color="bg-lgreen"
      ></MenuBlock>
       <MenuBlock
        text="FAQ's"
        link="faq"
        color="bg-lgreen"
      ></MenuBlock>
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

    {/* SCHEDULE */} 
    <div className="container-fluid bg-teal position-absolute"><Schedule></Schedule></div>
    
    {/* BOTTOM BORDERS */} 
    <div className="container-fluid position-fixed d-flex borders-bottom">
      <div className="left-border w-50">
        <img className="width-60" src={cornerbleft}></img>
      </div>
      <div className="right-border w-50 text-end"> 
        <img className="width-60" src={cornerbright}></img>
      </div>
    </div>
    </div>
  )
}
export default Index