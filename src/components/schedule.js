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

  <div className="container-fluid mb-5">
    <div className="container mt-5 schedule schedule-container pb-5">
      <div className="block pb-5 pt-2 text-center">
          <div className="m1"><p className="superbig euphorigenic gold">Schedule</p></div>
      </div>

      <div className="row white mx-1">
        <div className="col-12 pb-3 text-center">
        <div className="m1 pe-4"><p className="h1 white euphorigenic">Friday</p></div>
        </div>
      </div>

      <div className="row white mx-1">
        <div className="col-6 border-end border-light pb-3 text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">6:00PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white modesto">Welcome Drinks</p></div>
          <div className="m1 ps-4"><p className="p5 white">Location TBD (Minneapolis)</p></div>
        </div>
      </div>

      <div className="row white my-4 pt-3">
        <div className="col-12 pb-3 text-center">
        <div className="m1 pe-4"><p className="h1 white euphorigenic">Saturday</p></div>
        </div>
      </div>

      <div className="row white mx-1">
        <div className="col-6 border-end border-light pb-3 text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">4:30PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white modesto">Ceremony</p></div>
          <div className="m1 ps-4"><p className="p5 white">El Jefe Courtyard</p></div>
          <div className="m1 ps-4"><p className="p5 white lh-1">Doors open at 4:15pm</p></div>
        </div>

        <div className="col-6 border-end border-light pb-3 text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">5:00PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white modesto">Cocktails & Hors D'oeuvres</p></div>
          <div className="m1 ps-4"><p className="p5 white">Outdoor Courtyard</p></div>
        </div>

        <div className="col-6 border-end border-light text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">6:00PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white modesto">Dinner & Toasts</p></div>
          <div className="m1 ps-4"><p className="p5 white">Hall of Kings</p></div>
        </div>

        <div className="col-6 border-end border-light pb-3 text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">7:30PM</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white modesto">Tarot Card Reader</p></div>
          <div className="m1 ps-4"><p className="p5 white">Camelot Bar at the Hall of Kings</p></div>
        </div>

        <div className="col-6 border-end border-light text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">8:00pm</p></div>
        </div>
        <div className="col-6 pb-3">
          <div className="m1 ps-4"><p className="h5 white modesto">Dancing</p></div>
          <div className="m1 ps-4"><p className="p5 white">Hall of Kings</p></div>
        </div>

        <div className="col-6 border-end border-light text-end">
          <div className="m1 pe-4"><p className="h3 white modesto">10:00PM</p></div>
        </div>
        <div className="col-6 mb-2">
          <div className="m1 ps-4"><p className="h5 white modesto">Late Night Snacks</p></div>
        </div>
    </div>
  </div>
  </div>
  )
}
export default Schedule