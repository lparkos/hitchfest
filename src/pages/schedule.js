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

import '../styles/main.css'

// Step 2: Define your component
const Schedule = () => {
  return (
    <PageLayout pageTitle="Home Page">

  <div className="m-2 pt-2 pb-5 container-fluid">
        <div class="container-fluid position-fixed w-100 fader-top fixed-top-hack">
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

        <div class="container position-relative schedule mt-5 custom-height">
          <div className="block pb-5 pt-2 text-center">
              <div className="m1"><p className="superbig euphorigenic white">Order of the Day</p></div>
          </div>
          <div class="row white text-center mx-5">
            <div class="col-6 border-end border-light pb-3">
              <div class="m1"><p class="h3 white modesto">4:30PM</p></div>
            </div>
            <div class="col-6 pb-3">
              <div class="m1"><p class="h5 white">The Ceremony</p></div>
              <div class="m1"><p class="p5 white">El Jefe Courtyard</p></div>
            </div>

            <div class="col-6 border-end border-light pb-3">
              <div class="m1"><p class="h3 white modesto">5:00PM</p></div>
            </div>
            <div class="col-6 pb-3">
              <div class="m1"><p class="h5 white">Cocktail Hour</p></div>
              <div class="m1"><p class="p5 white">Hall of Kings</p></div>
            </div>

            <div class="col-6 border-end border-light">
              <div class="m1"><p class="h3 white modesto">5:30PM</p></div>
            </div>
            <div class="col-6 pb-3">
              <div class="m1"><p class="h5 white">The Reception</p></div>
              <div class="m1"><p class="p5 white">Hall of Kings</p></div>
            </div>

            <div class="col-6 border-end border-light">
              <div class="m1"><p class="h3 white modesto">6:30PM</p></div>
            </div>
            <div class="col-6 pb-3">
              <div class="m1"><p class="h5 white">Dinner</p></div>
              <div class="m1"><p class="p5 white">Hall of Kings</p></div>
            </div>

            <div class="col-6 border-end border-light">
              <div class="m1"><p class="h3 white modesto">7:30PM</p></div>
            </div>
            <div class="col-6 mb-5">
              <div class="m1"><p class="h5 white">First Dance</p></div>
              <div class="m1 m5-b"><p class="p5 white">Hall of Kings</p></div>
            </div>
            
          </div>
        </div>
        <div class="container-fluid fixed-bottom w-100 fader-bottom">
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

  {/* <div className="container-fluid border block">
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
              <div class="m1"><p class="h3 white">4PM</p></div>
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
              <div class="m1"><p class="h3 white">5PM</p></div>
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
              <div class="m1"><p class="h3 white">6PM</p></div>
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
              <div class="m1"><p class="h3 white">7PM-Midnight</p></div>
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
    
  </div> */}

  </PageLayout>
  )
}

// Step 3: Export your component
export default Schedule