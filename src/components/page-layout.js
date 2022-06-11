import * as React from 'react'
import { Link } from 'gatsby'
import MainNav from './nav'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import { gsap } from "gsap";

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  })
  
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})

const PageLayout = ({ location, children }) => {
  return (
    <div className="vh-100 mt-5">
      <MainNav></MainNav>
      {children}
    </div>
)
}
export default PageLayout