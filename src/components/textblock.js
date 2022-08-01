import * as React from 'react'
import { Link } from 'gatsby'


import star from '../images/elements/star.svg'


const TextBlock = ({ title, contents, link, linktext, anchor, change, children, address, sublink }) => {
  return (
    <div className="pt-2 text-center" id={anchor}>
        <div className="mx-3 px-3 mb-4">
            <p className="fs-2 modesto white">{title}</p>
            <Link to={sublink}><p className="fs-6 modesto white mb-4">{address}</p></Link>
            <p className="sage mb-3 f">{contents}</p>
            <Link class="page-nav modesto white fs-5 mb-1" to={link} role="button">{linktext}</Link>
        </div>
        {children}
        <img className="star my-4" src={star}></img>

    </div>
  )
}
export default  TextBlock
