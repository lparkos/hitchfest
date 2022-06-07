import * as React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion";

const PageLink = ({ anchor, children }) => {
  return (
    <div className="container-fluid block pt-4 pb-4">
        <div className="m1"><p className="display-3">{anchor}</p></div>
    </div>
  )
}
export default PageLink