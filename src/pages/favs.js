// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'
import Nav from '../components/nav'
import PageNav from '../components/page-nav'
import TextBlock from '../components/textblock'
import Card from 'react-bootstrap/Card'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/colors.css'
import '../styles/fonts.css'
import '../styles/main.css'



import moons from '../images/elements/moonburst.svg';


// Step 2: Define your component
const Favs = () => {
  return (
    <PageLayout pageTitle="Home Page">

    <div className="main-container">  
       <div className="left-col bg-sage px-5"> 
          <PageNav
            anchor1="Minneapolis Favorites"
            anchor2="Restaurants"
            anchor3="Bars"
            anchor4="Spaces"
            // anchor5="Shopping"
          >
          </PageNav>
        </div>

        <div className="right-col bg-dgreen px-3">
          <div className="container block text-center pt-5 pb-4">
            <img className="moons img-fluid" src={moons}></img>
          </div>

          <TextBlock 
            anchor="link2"
            title="Restaurants"
          >
            <ul>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Coal Fired Pizza: Black Sheep Pizza</p>
                    <a className="fs-6 modesto white" href="https://blacksheeppizza.com/">https://blacksheeppizza.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Neopolitan Pizza: Young Joni</p>
                    <a className="fs-6 modesto white" href="https://www.youngjoni.com/">https://www.youngjoni.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best No Frills Vietnamese: Quangs</p>
                    <a className="fs-6 modesto white" href="https://www.quang-restaurant.com/">https://www.quang-restaurant.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Fancy Vietnamese: Hai Hai</p>
                    <a className="fs-6 modesto white" href="https://www.haihaimpls.com/">https://www.haihaimpls.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Steakhouse: Manny's Steakhouse</p>
                    <a className="fs-6 modesto white" href="https://mannyssteakhouse.com/">https://mannyssteakhouse.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Coasty Vibes: Alma</p>
                    <a className="fs-6 modesto white" href="https://www.almampls.com/">https://www.almampls.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Burgers: Matt's Bar</p>
                    <a className="fs-6 modesto white" href="https://mattsbar.com/">https://mattsbar.com/</a>
                </li>
            </ul>
          </TextBlock>
        

          <TextBlock 
            anchor="link3"
            title="Bars"
          >
            <ul>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Wine Bar</p>
                    <a className="fs-6 modesto white" href="https://www.google.com/maps/dir//best+cocktails+in+minneapolis/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x52b3328f0ebf1403:0x4fcf12df2079639e?sa=X&ved=2ahUKEwjAiIv3j9P5AhWmj4kEHYhwAbMQ9Rd6BAgFEAM">Bev's Wine Bar</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Most Fun: Psycho Suzis</p>
                    <a className="fs-6 modesto white" href="https://www.psychosuzis.com/">https://www.psychosuzis.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Dive/Karoeke Bar: Vegas Lounge</p>
                    <a className="fs-6 modesto white" href="https://vegasloungene.com/">https://vegasloungene.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Overall Brewery: Indeed Brewery</p>
                    <a className="fs-6 modesto white" href="https://indeedbrewing.com/">https://indeedbrewing.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Super Crafty Brewery: Pyres Brewery</p>
                    <a className="fs-6 modesto white" href="https://www.pryesbrewing.com/">https://www.pryesbrewing.com/</a>
                </li>
            </ul>
          </TextBlock>

          <TextBlock 
            anchor="link4"
            title="Spaces"
          >
            <ul>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Art Gallery: The Walker</p>
                    <a className="fs-6 modesto white" href="https://walkerart.org/">https://walkerart.org/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Theatre: Guthrie Theatre</p>
                    <a className="fs-6 modesto white" href="https://www.guthrietheater.org/">https://www.guthrietheater.org/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">St. Anthony Main (Where we're getting hitched!)</p>
                    <a className="fs-6 modesto white" href="https://www.minneapolis.org/things-to-do/itineraries/52-must-sees/st-anthony-main/">View info on Minneapolis.org</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Boat Cruise: MSP Water Taxi (Captain Cory)</p>
                    <a className="fs-6 modesto white" href="https://mplswatertaxi.com/">https://mplswatertaxi.com/</a>
                </li>
            </ul>
          </TextBlock>

          {/* <TextBlock 
            anchor="link5"
            title="Shopping"
          >
            <ul>
                <li className="py-2">
                    <p className="fs-5 restora sage">Best Art Gallery: The Walker</p>
                    <a className="fs-6 modesto white" href="https://www.northmade.co/">https://www.northmade.co/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Winter Stuff: Askov Finlayson (This place was cool when I lived here in 2012.</p>
                    <a className="fs-6 modesto white" href="https://askovfinlayson.com/">https://askovfinlayson.com/</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">St. Anthony Main (Where we're getting hitched!)</p>
                    <a className="fs-6 modesto white" href="https://www.minneapolis.org/things-to-do/itineraries/52-must-sees/st-anthony-main/">View info on Minneapolis.org</a>
                </li>
                <li className="py-2">
                    <p className="fs-5 restora sage">Boat Cruise: MSP Water Taxi (Captain Cory)</p>
                    <a className="fs-6 modesto white" href="https://mplswatertaxi.com/">https://mplswatertaxi.com/</a>
                </li>
            </ul>
            </TextBlock> */}
        </div>
    </div>
   
  </PageLayout>
  )
}

// Step 3: Export your component
export default Favs

