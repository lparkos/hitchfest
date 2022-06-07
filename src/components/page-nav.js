import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";


const PageNav = ({ anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7, bgColor, image, children }) => {

  return (
    <div className="page-nav"> 
        <div className="block pt-5">
            <div className="m1"><p className="display-1 euphorigenic dgreen">{anchor1}</p></div>
        </div>
        <div className="block border-bottom">
            <div><a href="#link2" ><p className="fs-5 modesto dgreen">{anchor2}</p></a></div>
        </div>
        <div className="block border-bottom">
            <div><a href="#link3"><p className="fs-5 modesto dgreen">{anchor3}</p></a></div>
        </div>
        <div className="block border-bottom">
            <div><a href="#link4"><p className="fs-5 modesto dgreen">{anchor4}</p></a></div>
        </div>
        <div className="block border-bottom">
            <div><a href="#link5"><p className="fs-5 modesto dgreen">{anchor5}</p></a></div>
        </div>
        <div className="block">
            <div><a href="#link6"><p className="fs-5 modesto dgreen">{anchor6}</p></a></div>
        </div>
        <div className="block">
            <div><a href="#link7"><p className="fs-5 modesto dgreen">{anchor7}</p></a></div>
        </div>
    </div>
  )
}

export default PageNav

