// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'
import Nav from '../components/nav'
import PageNav from '../components/page-nav'
import Card from 'react-bootstrap/Card'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


import img from '../images/grainbelt.jpeg';

const containerStyle = {
  width: 'auto',
  height: '500px'
};

const position = {
  lat: 44.984160,
  lng: -93.254480
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

// Step 2: Define your component
const Hotels = () => {
  return (
    <PageLayout pageTitle="Home Page">
    <PageNav
      anchor1="Accomodations"
      anchor2="Courtesy Rooms"
      anchor3="Airbnb/Vrbo"

      image={img}
    ></PageNav>

    <div className="container d-flex flex-sm-wrap">
      <div className="md-col col-md-6 order-1 bg-white"> 
        <div className="container block pt-4 pb-4">
          <div className="left p-2 mr1 border">
      

          </div>
      </div>
    </div>

    <div className="md-col col-md-6 order-1 bg-lgreen moonborder-bg">
      <div className="container block text-center py-5">
        <div className="m-3 px-3 py-5" id="{anchor2}">
          <p className="h1">Reserved Room's</p>
          <p>We've blocked off rooms at the Rennasaince Hotel if you choose to book here. Their are many hotels in the city, but this one is the closest!</p>
          <p>219 SE Main St, Minneapolis, MN 55414</p>
          <a class="btn btn-outline-light" href="https://www.marriott.com/events/start.mi?id=1653064276380&key=GRP" role="button">Book Now</a>
        </div>
      </div>
    </div>
  </div>
   
  <div className="container d-md-flex flex-sm-wrap">
    <div className="md-col col-md-6 order-1 bg-lgreen">
      <div className="container block">
        <div className="m-3" id="{anchor3}">
          <p className="h1">AirBnb/Vrbo</p>
        </div>
      </div>
    </div>
    <div className="md-col col-md-6 order-1 bg-lgreen"> 
      <div className="container block">
        <div className="left px-3 py-3"><p>There is a parking ramp that you can park in that is connected to the building. This has handicap access and wheelchair access and will take you right where you need to go.</p>
        <a class="btn btn-outline-light" href="https://www.airbnb.com/s/Minneapolis--Minnesota--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&query=Minneapolis%2C%20Minnesota%2C%20United%20States&place_id=ChIJvbt3k5Azs1IRB-56L4TJn5M&date_picker_type=calendar&checkin=2022-10-29&checkout=2022-10-30&source=structured_search_input_header&search_type=autocomplete_click" role="button">Find an Air B&B</a>
      </div>
      </div>
    </div>
  </div>

  </PageLayout>
  )
}

// Step 3: Export your component
export default Hotels