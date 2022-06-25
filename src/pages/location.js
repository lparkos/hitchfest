// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'
import Nav from '../components/nav'
import PageNav from '../components/page-nav'
import TextBlock from '../components/textblock'
import Card from 'react-bootstrap/Card'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


import moons from '../images/elements/moonburst.svg';
import star from '../images/elements/star.svg'


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
const Location = () => {
  return (
    <PageLayout pageTitle="Home Page">

    <div className="main-container">  
        <div className="left-col bg-sage px-5"> 
          <PageNav
            anchor1="Location Information"
            anchor2="Ceremony & Reception"
            anchor3="Hotel Blocks"
            anchor4="Airport"
            anchor5="Ground Transport"
            anchor6="Parking"
            anchor7="Ceremony Map"
          ></PageNav>
        </div>
       
        <div className="right-col bg-green px-5">
          <div className="container block text-center pt-5 pb-4">
            <img className="moons img-fluid" src={moons}></img>
          </div>
          <TextBlock 
            anchor="link2"
            title="Cermony & Reception"
            contents="Our wedding will be held at 
            El Jefe Urban Hacienda on beautiful St. Anthony Main in Northeast Minneapolis. Our ceremony is outside in the courtyard and dinner and reception will follow downstairs at the Hall of Kings. Signs will be posted! Address: 219 SE Main St, Minneapolis, MN 55414"
            linktext="Get Directions"
            link="https://www.google.com/maps/dir//Jefe+Urban+Cocina,+219+SE+Main+St,+Minneapolis,+MN+55414/@44.9841318,-93.2562839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52b32d7b981b3919:0x29285413f098a8e8!2m2!1d-93.2540952!2d44.9841318!3e0"
          ></TextBlock>

          <TextBlock 
            anchor="link3"
            title="Hotel Blocks"
            contents="We've blocked off rooms at the Rennasaince Hotel if you choose to book here. Their are many hotels in the city, but this one is the closest! <br></br>219 SE Main St, Minneapolis, MN 55414"
            linktext="Get Directions"
            link="https://www.google.com/maps/dir//Jefe+Urban+Cocina,+219+SE+Main+St,+Minneapolis,+MN+55414/@44.9841318,-93.2562839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52b32d7b981b3919:0x29285413f098a8e8!2m2!1d-93.2540952!2d44.9841318!3e0"
          ></TextBlock>
         
          <TextBlock 
            anchor="link4"
            title="Airport Information"
            contents="If you are staying at a hotel nearby, you can tell your driver to drop you off at the front of the court yard, from there you can walk right in the court yard where the ceremony will be held."
            linktext="Get Directions"
            link="https://www.google.com/maps/dir//Jefe+Urban+Cocina,+219+SE+Main+St,+Minneapolis,+MN+55414/@44.9841318,-93.2562839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52b32d7b981b3919:0x29285413f098a8e8!2m2!1d-93.2540952!2d44.9841318!3e0"
          ></TextBlock>

          <TextBlock 
            anchor="link5"
            title="Transportation"
            contents="Uber/Lyft are available from the airport to many metro area hotels and destinations. Alternatively you could take the Light Rail from the airport. "
            linktext="Get Directions"
            link="https://www.google.com/maps/dir//Jefe+Urban+Cocina,+219+SE+Main+St,+Minneapolis,+MN+55414/@44.9841318,-93.2562839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52b32d7b981b3919:0x29285413f098a8e8!2m2!1d-93.2540952!2d44.9841318!3e0"
          ></TextBlock>

          <TextBlock 
            anchor="link6"
            title="Parking"
            contents="There is a parking ramp that you can park in that is connected to the building. This has handicap access and wheelchair access and will take you right where you need to go."
            linktext="Get Directions"
            link="https://www.google.com/maps/dir//Jefe+Urban+Cocina,+219+SE+Main+St,+Minneapolis,+MN+55414/@44.9841318,-93.2562839,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52b32d7b981b3919:0x29285413f098a8e8!2m2!1d-93.2540952!2d44.9841318!3e0"
          ></TextBlock>

          <TextBlock 
            anchor="link7"
            title="Ceremony Map">
            <div className="left p-2 mr1 text-center">
              <LoadScript googleMapsApiKey="AIzaSyAel-VNEYn0o3en1_dk0siQGLftQnBnXdo">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={12}>
              <Marker
                    onLoad={onLoad}
                    position={position}
                  />
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
              </GoogleMap>
              </LoadScript>
            </div>
          </TextBlock>
        </div>
    </div>
   
  {/* <div className="container d-md-flex flex-sm-wrap">
    <div className="md-col col-md-6 order-1 bg-lgreen"> 
      <div className="container block">
        <div className="left px-3 py-3"><p>There is a parking ramp that you can park in that is connected to the building. This has handicap access and wheelchair access and will take you right where you need to go.</p>
        <a class="btn btn-outline-light" href="https://jefeminneapolis.com/parking/" role="button">Get Parking Instructions</a>
      </div>
      </div>
    </div>
  </div>

  <div className="container d-md-flex flex-sm-wrap">
    <div className="md-col col-md-6 order-1 bg-lgreen"> 
      <div className="container block">
        <div className="left px-3 py-3"><p>If you are staying at a hotel nearby, you can tell your driver to drop you off at the front of the court yard, from there you can walk right in the court yard where the ceremony will be held.</p>
        <a class="btn btn-outline-light" href="https://www.google.com/maps/dir/Minneapolis%E2%88%92Saint+Paul+International+Airport,+Minnesota/Jefe+Urban+Cocina,+219+SE+Main+St,+Minneapolis,+MN+55414/@44.9241831,-93.312533,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x87f62f2a85c06a07:0x2bd3d37c78783591!2m2!1d-93.2222846!2d44.8847554!1m5!1m1!1s0x52b32d7b981b3919:0x29285413f098a8e8!2m2!1d-93.2540952!2d44.9841318!3e0" role="button">See Distance From Airport</a>
        </div>
      </div>
    </div>
  </div>

  <div className="container d-md-flex flex-sm-wrap">
    <div className="md-col col-md-6 order-1 bg-lgreen"> 
      <div className="container block">
        <div className="left px-3 py-3"><p>If you are staying at a hotel nearby, you can tell your driver to drop you off at the front of the court yard, from there you can walk right in the court yard where the ceremony will be held.</p>
        <a class="btn btn-outline-light" href="https://auth.uber.com/login/?breeze_local_zone=dca8&next_url=https%3A%2F%2Fm.uber.com%2Flooking%3F%25243p%3Da_custom_354088%26_branch_match_id%3D1019745326205824919%26_branch_referrer%3DH4sIAAAAAAAAA0WNW26FIBiEV4MvBo%2520ACjYhTS%2520n2yDwQ49EuVQkTXdffWiazMt8M5lZjiOXp9stgXedzrnbfFxv97e6ky8RvskzogPLUiuo5UhBsXHohWhOal1Zj5RV3Te5XCuIvSD6cSp01bi9gxROs6W0%2520vhoKmweVuWtHIBrawTF2jGCh97O2Bg%2520YgcC9DRxMtO%2520QfwOOmTtH1G2LeKvf66NOjjE39urUhykaPX%2520o3I1my%2520L2%2520V5e0VHje6fqlINkW4gjhPmzj%252FR44H0DM%2520UT%252FiTw0jBajuP9hdQvBkAEQEAAA%253D%253D%26uclick_id%3D4c7adb82-ae31-40d9-bb75-ec8ca6671920%26utm_campaign%3D%2520%2520%257Bcampaign%2520name%257D%2520%26utm_medium%3Dpaid%2520advertising%26~campaign%3D%2520%2520%257Bcampaign%2520name%257D%2520%26~secondary_publisher%3Dcom%26~tune_publisher_sub1%3De41e713e-bb80-4103-9276-f7c52cdad95d&state=SxCsLcqyp4rPI7KTLR2E0SlT7b1EnJiNEX6KwffIZtg%3D&x-uber-analytics-session-id=e41e713e-bb80-4103-9276-f7c52cdad95d" role="button">Schedule Uber</a>
        </div>
      </div>
    </div>
  </div> */}

  </PageLayout>
  )
}

// Step 3: Export your component
export default Location

