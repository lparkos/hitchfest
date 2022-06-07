import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";

const TextBlock = ({ title, contents, link, linktext, anchor, change }) => {
  return (
    <div className="pt-2" id={anchor}>
        <div className="mx-3 px-3 mb-4 text-center">
            <p className="fs-5 modesto gold">{title}</p>
            <p className="white mb-3">{contents}</p>
            <a class="euphorigenic gold fs-5 mb-1" href="{link}" role="button">{linktext}</a>
        </div>
    </div>
  )
}
export default  TextBlock
