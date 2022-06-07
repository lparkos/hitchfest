// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'


import 'bootstrap/dist/css/bootstrap.css';
import '../styles/colors.css'
import '../styles/fonts.css'
import '../styles/main.css'

import cornerleft from '../images/elements/corner-left.svg'
import universe from '../images/elements/universe.svg'
import cornerright from '../images/elements/corner-right.svg'
import cornerbright from '../images/elements/corner-b-right.svg'
import cornerbleft from '../images/elements/corner-b-left.svg'
import landm from '../images/elements/landm.svg'
import cosmicdate from '../images/elements/cosmic-date.svg'
import mspmn from '../images/elements/mspmn.svg'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home Page">
    
      <div className="m-2 pt-2 pb-5">
        <div class="container-fluid">
          <div class="row align-items-start">
            <div class="col">
              <img className="img-fluid" src={cornerleft}></img>
            </div>
            <div class="col text-center">
            <img className="img-fluid w-25 align-top" src={universe}></img>
            </div>
            <div class="col">
              <img className="img-fluid" src={cornerright}></img>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-start">
            <div class="text-center">
              <img className="img-fluid w-75 align-top" src={landm}></img>
            </div>
            <div class="text-center">
              <img className="img-fluid w-50 pt-2 align-top" src={cosmicdate}></img>
            </div>
            <div class="text-center">
              <img className="img-fluid w-50 pt-2 align-top" src={mspmn}></img>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row align-items-start">
            <div class="col">
              <img className="img-fluid" src={cornerbleft}></img>
            </div>
            <div class="col text-center">
            </div>
            <div class="col"> 
              <img className="img-fluid" src={cornerbright}></img>
            </div>
          </div>
        </div>
      </div>

  </PageLayout>
  )
}

// Step 3: Export your component
export default IndexPage