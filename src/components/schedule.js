// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from './page-layout'
import Nav from './nav'
import PageNav from './page-nav'
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

  <div className="container-fluid mb-4">
    <div className="container mt-5 schedule schedule-container">
      <div className="block pb-5 pt-2 text-center">
          <div className="m1"><p className="superbig euphorigenic gold">Itinerary</p></div>
      </div>
      <div className="row white mx-5">
        <div className="col-6 border-end border-light pb-3 text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">4:30PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white">Ceremony</p></div>
          <div className="m1 ps-4"><p className="p5 white">@El Jefe Courtyard</p></div>
          <div className="m1 ps-4"><p className="p5 white">It could be chilly, bring a jacket!</p></div>
        </div>

        <div className="col-6 border-end border-light pb-3 text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">5:00PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white">Let's Drink!</p></div>
          <div className="m1 ps-4"><p className="p5 white">@El Jefe Courtyard</p></div>
        </div>

        <div className="col-6 border-end border-light text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">6:30PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white">Let's Eat!</p></div>
          <div className="m1 ps-4"><p className="p5 white">@Hall of Kings</p></div>
          <div className="m1 ps-4"><p className="p5 white">Downstairs of El Jefe Cucina, handicap accessible elevator located down hall.</p></div>

        </div>

        <div className="col-6 border-end border-light text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">8:00PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white">Let's Dance!</p></div>
          <div className="m1 ps-4"><p className="p5 white">@Hall of Kings</p></div>
          <div className="m1 ps-4"><p className="p5 white">Margaritas in October? Yes, sirrrr!</p></div>
        </div>

        <div className="col-6 border-end border-light text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">10:00PM</p></div>
        </div>
        <div className="col-6 mb-2">
          <div className="m1 ps-4"><p className="h5 white">Snacks</p></div>
          <div className="m1 ps-4 m5-b"><p className="p5 white">@Hall of Kings</p></div>
        </div>
    </div>
  </div>
  </div>
  )
}
export default Schedule