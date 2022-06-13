import * as React from 'react'

import star from '../images/elements/star.svg'


const TextBlock = ({ title, contents, link, linktext, anchor, change,children }) => {
  return (
    <div className="pt-2 text-center" id={anchor}>
        <div className="mx-3 px-3 mb-4">
            <p className="fs-2 modesto white">{title}</p>
            <p className="white mb-3">{contents}</p>
            <a class="page-nav white fs-5 mb-1" href="{link}" role="button">{linktext}</a>
        </div>
        {children}
        <img className="star my-4" src={star}></img>

    </div>
  )
}
export default  TextBlock
