import * as React from 'react'
import { Link } from 'gatsby'
import Nav from '../components/nav'

const PageLayout = ({ pageTitle, children }) => {
  return (
    <div className="vh-100">
      {/* <div class="container-fluid block bg-white">
        <div class="m1"><p class="h3">SPOTIFY STUFF</p></div>
      </div> */}
      <main>
        <Nav></Nav>
        {children}
      </main>
      {/* <div class="container-fluid block">
        <div class="container-fluid border block bg-white">
          <div class="m1"><p class="h1">Can't Wait!</p></div>
        </div>
      </div> */}
    </div>
  )
}
export default PageLayout