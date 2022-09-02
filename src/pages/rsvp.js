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


const found = guests.find(obj => {
  return obj.id === 1;
});

// Step 2: Define your component
const Rsvp = () => {
  const [name, setName] = useState('');

  const getName = event => {
    setName(event.target.value);
    console.log('value is:', event.target.value);
  };

  return (
    <PageLayout pageTitle="Home Page">

    <div className="container-lg">  
          <div className="container block text-center pt-5 pb-4">
            <img className="moons img-fluid" src={moons}></img>
          </div>

          <div className="mx-3 px-3 mb-4 text-center">
            <p className="superbig euphorigenic lgreen">Kindly Reply</p>
            <p className="sage mb-4 fs-6">We can’t wait to celebrate with ya! Kindly respond by September 1st.</p>
          </div>

          <div className="pt-2" id="#link2">
              <div className="mx-3 px-3 mb-4 text-center">
              <Form action="https://api.sheetmonkey.io/form/79YHxYU9GzVH3AuZPkAPNC" method="post">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Who is RSVP'ing?</Form.Label>
                  <Form.Control type="text" placeholder="Hello my name is..." name="Name"/>
                  <div className="row justify-content-center">
                    <div className="col-6 text-center">
                      <Form.Check className="mt-4 text-start" type="radio" name="Attending" value="Yes!" label="Yes! Can't wait to bust a move on the dance floor!" />
                      <Form.Check className="mt-4 text-start" type="radio" name="Attending" value="No" label="No, you'll have to bust a move without me/us." />
                    </div>
                  </div>
                  <Form.Label className="mt-4">Name of Guest</Form.Label>
                  <Form.Control type="text" placeholder="Who ya bringing?" name="Guest"/>
                  <Form.Label className="mt-4">Anything else you'd like for us to know?</Form.Label>
                  <Form.Control type="text" placeholder="Special dietary requests, accessible seating?" name="Special"/>
                </Form.Group>
                <button type="submit" class="rsvp btn bg-yellow my-4" value="RSVP">RSVP</button>
              </Form>
              </div>
          </div>
    </div>
   

  </PageLayout>
  )
}

// Step 3: Export your component
export default Rsvp

