import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";


const PageNav = ({ anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7, bgColor, image, children }) => {

  return (
    <div className="page-nav mt-4"> 
        <div className="block pt-5">
            <div className="m1"><p className="superbig euphorigenic dgreen">{anchor1}</p></div>
        </div>
        <div className="block mt-5">
        {anchor2 ? 
            <div className="border-bottom"><a href="#link2"><p className="fs-5 modesto dgreen lh-1 py-2">{anchor2}</p></a></div>
            : <div><a href="#link2"><p className="fs-5 modesto dgreen lh-1">{anchor2}</p></a></div>}
        </div>
        <div className="block">
        {anchor3 ? 
            <div className="border-bottom"><a href="#link3"><p className="fs-5 modesto dgreen lh-1 py-2">{anchor3}</p></a></div>
            : <div><a href="#link4"><p className="fs-5 modesto dgreen lh-1">{anchor3}</p></a></div>}
        </div>
        <div className="block">
        {anchor4 ? 
            <div className="border-bottom"><a href="#link4"><p className="fs-5 modesto dgreen lh-1 py-2">{anchor4}</p></a></div>
            : <div><a href="#link5"><p className="fs-5 modesto dgreen lh-1">{anchor4}</p></a></div>}
        </div>
        <div className="block">
        {anchor5 ? 
            <div className="border-bottom"><a href="#link5"><p className="fs-5 modesto dgreen lh-1 py-2">{anchor5}</p></a></div>
            : <div><a href="#link5"><p className="fs-5 modesto dgreen lh-1">{anchor5}</p></a></div>}
        </div>
        <div className="block">
        {anchor6 ? 
            <div className="border-bottom"><a href="#link6"><p className="fs-5 modesto dgreen lh-1 py-2">{anchor6}</p></a></div>
            : <div><a href="#link6"><p className="fs-5 modesto dgreen lh-1">{anchor6}</p></a></div>}
        </div>
        <div className="block">
            {anchor7 ? 
            <div className="border-bottom"><a href="#link7"><p className="fs-5 modesto dgreen lh-1 py-2">{anchor7}</p></a></div>
            : <div><a href="#link7"><p className="fs-5 modesto dgreen lh-1">{anchor7}</p></a></div>}
        </div>
    </div>
  )
}

export default PageNav

