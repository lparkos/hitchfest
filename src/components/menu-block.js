import * as React from 'react'
import { Link } from 'gatsby'

import star from '../images/elements/star.svg'


const MenuBlock = ({text, link, color }) => {
  return (
    <div className={`py-2 text-center border-bottom ${color}`}>
        <Link className="modesto dgreen page-nav fs-5 mb-1" to={link}>
          <div className="mx-3 px-3">
            {text}
          </div>
        </Link>
    </div>
  )
}
export default  MenuBlock
