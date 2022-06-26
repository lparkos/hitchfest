import * as React from 'react'
import { Link } from 'gatsby'

import star from '../images/elements/star.svg'


const MenuBlock = ({text, link, color }) => {
  return (
    <div className={`py-2 text-center border-bottom ${color}`}>
        <div className="mx-3 px-3">
            <Link className="modesto dgreen page-nav fs-5 mb-1" to={link}>{text}</Link>
        </div>
    </div>
  )
}
export default  MenuBlock
