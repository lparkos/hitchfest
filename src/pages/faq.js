// Step 1: Import React
import * as React from 'react'
import {useState} from 'react';
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'
import Nav from '../components/nav'
import PageNav from '../components/page-nav'
import TextBlock from '../components/textblock'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import guests from '../js/weddingguests.js'
import moons from '../images/elements/moonburst.svg';


// Step 2: Define your component
const Faq = () => {
  
  return (
    <PageLayout pageTitle="Home Page">

    <div className="main-container">  
      <div className="left-col bg-sage px-5"> 
        <PageNav
          anchor1="Questions & Answers"
          anchor2="What do I wear?"
          anchor3="Will the Ceremony be Outside?"
          anchor4="Are Children Allowed at the Ceremony?"
          anchor5="Can I Take Pictures at the Ceremony?"
          anchor6="Wheelchair access?"
        ></PageNav>
      </div>

      <div className="right-col bg-dgreen px-3">
          <div className="container block text-center pt-5 pb-4">
            <img className="moons img-fluid" src={moons}></img>
          </div>

         <TextBlock 
            anchor="link2"
            title="What do I wear? Is this a costume party?"
            contents="Leave the chicken costumes in the closet, but anything that Wednesday, Morticia or Gomez Adams would wear is encouraged. If this isn't your jam, wear whatever cocktail/semi-formal attire that you're comfortable in. Just make sure you can... get low."
          ></TextBlock>

          <TextBlock 
            anchor="link3"
            title="Will the ceremony be outside?"
            contents="Weather permitting the ceremony will be outside, dress warmly the end of October in Minnesota normally is between 45-60 degrees. If it snows, rains, or is below zero, the ceremony will mostly definitely be held inside."
          ></TextBlock>

          <TextBlock 
            anchor="link4"
            title="Are children allowed at the ceremony or reception?"
            contents="While we would love to have all of our family members on our guest list, we have decided to keep our wedding an adults-only event."
          ></TextBlock>

          <TextBlock 
            anchor="link5"
            title="Can I take pictures during the ceremony?"
            contents="We ask that you please turn off your cellphones & cameras during the ceremony. Don't worry, we have hired a photographer and will have a lot of photos to share with you after the wedding."
          ></TextBlock>

          <TextBlock 
            anchor="link6"
            title="Is there wheelchair access?"
            contents="Yes! From the parking ramp, take the elevator to the Hall of Kings, and follow the hallway to the doors to the courtyard. To access the reception there is an elevator marked to take you downstairs to reception area."
          ></TextBlock>
    </div>
    </div>

</PageLayout>
)
}

// Step 3: Export your component
export default Faq

