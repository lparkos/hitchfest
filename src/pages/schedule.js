// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'
import Nav from '../components/nav'
import PageNav from '../components/page-nav'
import Card from 'react-bootstrap/Card'

import img from '../images/grainbelt.jpeg';
import cornerleft from '../images/elements/corner-left.svg'
import universe from '../images/elements/universe.svg'
import cornerright from '../images/elements/corner-right.svg'
import cornerbright from '../images/elements/corner-b-right.svg'
import cornerbleft from '../images/elements/corner-b-left.svg'


// Step 2: Define your component
const Schedule = () => {
  return (
    <PageLayout pageTitle="Home Page">

  <div className="container-fluid border block">
      <div className="m-2 pt-5 pb-5">
        <div class="container">
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
            <div class="col">
            </div>
            <div class="col text-center">
              <div class="m1"><p class="h1 white">4PM</p></div>
              <div class="m1"><p class="white">Ceremony</p></div>
            </div>
            <div class="col"> 
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col text-center">
              <div class="m1"><p class="h1 white">5PM</p></div>
              <div class="m1"><p class="white">Cocktails!</p></div>
            </div>
            <div class="col"> 
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col text-center">
              <div class="m1"><p class="h1 white">6PM</p></div>
              <div class="m1"><p class="white">Tacos!</p></div>
            </div>
            <div class="col"> 
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col text-center">
              <div class="m1"><p class="h1 white">7PM-Midnight</p></div>
              <div class="m1"><p class="white">Reception</p></div>
            </div>
            <div class="col"> 
            </div>
          </div>
        </div>

        <div class="container">
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
    
  </div>

  </PageLayout>
  )
}

// Step 3: Export your component
export default Schedule