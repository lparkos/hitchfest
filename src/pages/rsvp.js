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
        <div className="left-col bg-lgreen px-5"> 
        <div className="page-nav"> 
          <div className="block pt-5">
              <div className="m1"><p className="display-1 euphorigenic dgreen">RSVP</p></div>
          </div>
        </div>
        </div>
       
        <div className="right-col bg-dgreen px-5">
          <div className="container block text-center pt-5 pb-4">
            <img className="moons img-fluid" src={moons}></img>
          </div>
          <div className="pt-2">
              <div className="mx-3 px-3 mb-4 text-center">
                  <p className="fs-5 modesto gold">RSVP to the Main Event!</p>
                  <p className="white mb-3">We can’t wait to celebrate with ya! Kindly respond by August 1st. </p>
              </div>
          </div>

          <div className="pt-2">
              <div className="mx-3 px-3 mb-4 text-center">
              <Form action="https://api.sheetmonkey.io/form/79YHxYU9GzVH3AuZPkAPNC" method="post">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Who's RSVP'ing?</Form.Label>
                  <Form.Control type="text" placeholder="Kim Kardashian" name="Name"/>
                  <Form.Label>Name of Guest</Form.Label>
                  <Form.Control type="text" placeholder="Who ya bringing?" name="Name"/>
                  <Form.Label>Anything else you'd like for us to know?</Form.Label>
                  <Form.Control type="text" placeholder="Special dietary requests, accessible seating?" name="Name"/>
                </Form.Group>
                <input type="submit" value="RSVP" />
              </Form>

                  {/* <form action="https://api.sheetmonkey.io/form/79YHxYU9GzVH3AuZPkAPNC" method="post">
                    <label><p className="white">Who is RSVP'ing</p><input type="text" name="Name" required /></label>
                    <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" /> <br></br>
                    <label><p className="white">Your Email</p><input type="text" name="Name" required /></label><br></br>
                    <InputGroup className="mb-3">
                      <InputGroup.Checkbox />
                      <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                    <input type="submit" value="Send my response" />
                  </form> */}

                  

              </div>
          </div>


        </div>
    </div>
   

  </PageLayout>
  )
}

// Step 3: Export your component
export default Rsvp

