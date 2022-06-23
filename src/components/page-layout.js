import * as React from 'react'
import { Link } from 'gatsby'
import DetailNav from './detail-nav'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import { gsap } from "gsap";


const PageLayout = ({ location, children }) => {
  return (
    <div className="vh-100">
      <DetailNav></DetailNav>
      {children}
    </div>
)
}
export default PageLayout