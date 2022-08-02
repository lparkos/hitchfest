// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/page-layout'
import Nav from '../components/nav'
import PageNav from '../components/page-nav'
import TextBlock from '../components/textblock'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'



import moons from '../images/elements/moonburst.svg';


// Step 2: Define your component
const Rsvp = () => {
  return (
    <PageLayout pageTitle="Home Page">

    <div className="main-container">  
      <div className="left-col bg-sage px-5"> 
        <PageNav
          anchor1="RSVP"
          anchor2="Kindly Reply"
          anchor3="FAQ"
          anchor4="Will the Ceremony be Outside?"
          anchor5="Are Children Allowed at the Ceremony?"
          anchor6="Can I Take Pictures at the Ceremony?"
          anchor7="Is there wheelchair access?"
        ></PageNav>
      </div>

      {/* <div className="mx-3 px-3 mb-4">
            <p className="fs-2 modesto white">{title}</p>
            <p className="white mb-3">{contents}</p>
            <a class="page-nav white fs-5 mb-1" href="{link}" role="button">{linktext}</a>
        </div>
        {children}
        <img className="star my-4" src={star}></img> */}
       
        <div className="right-col bg-dgreen px-3">
          <div className="container block text-center pt-5 pb-4">
            <img className="moons img-fluid" src={moons}></img>
          </div>

          <TextBlock 
            anchor="link2"
            title="Kindly Reply"
            contents="We can’t wait to celebrate with ya! Kindly respond by September 1st."
            >

          <div className="pt-2" id="#link2">
              <div className="mx-3 px-3 mb-4 text-center">
              <Form action="https://api.sheetmonkey.io/form/79YHxYU9GzVH3AuZPkAPNC" method="post">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Who's RSVP'ing?</Form.Label>
                  <Form.Control type="text" placeholder="Hello my name is..." name="Name"/>
                  <Form.Label className="mt-4">Name of Guest</Form.Label>
                  <Form.Control type="text" placeholder="Who ya bringing?" name="Guest"/>
                  <Form.Label className="mt-4">Anything else you'd like for us to know?</Form.Label>
                  <Form.Control type="text" placeholder="Special dietary requests, accessible seating?" name="Special"/>
                </Form.Group>
                <button type="submit" class="rsvp btn bg-yellow my-4" value="RSVP">RSVP</button>
              </Form>
              </div>
          </div>
          </TextBlock>

          {/* <TextBlock 
            anchor="link3"
            title="What is the dress code?"
            contents="The dress code for our wedding will be “Semi-Formal”. This means wear something you feel awesome in! No jeans or sweats but the rest is up to you."
          ></TextBlock> */}

          <TextBlock 
            anchor="link4"
            title="Will the ceremony be outside?"
            contents="Weather permitting the ceremony will be outside, dress warmly the end of October in Minnesota normally is between 45-60 degrees. If it snows, rains, or is below zero, the ceremony will mostly definitely be held inside."
          ></TextBlock>

          <TextBlock 
            anchor="link5"
            title="Are children allowed at the ceremony or reception?"
            contents="While we would love to have all of our family members on our guest list, we have decided to keep our wedding an adults-only event."
          ></TextBlock>

          <TextBlock 
            anchor="link6"
            title="Can I take pictures during the ceremony?"
            contents="We ask that you please turn off your cellphones & cameras during the ceremony. Don't worry, we have hired a photographer and will have a lot of photos to share with you after the wedding."
          ></TextBlock>

          <TextBlock 
            anchor="link7"
            title="Is there wheelchair access?"
            contents="Yes! From the parking ramp, take the elevator to the Hall of Kings, and follow the hallway to the doors to the courtyard. To access the reception there is an elevator marked to take you downstairs to reception area."
          ></TextBlock>


        </div>
    </div>
   

  </PageLayout>
  )
}

// Step 3: Export your component
export default Rsvp

