import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = props => {
  console.log("first", props)
  return(
    <nav className="side-drawer">
      <ul>
        <li><Link to={'/NewMarker'} className="nav-link">+New Marker</Link></li>
        <li><a href="/">Dogs</a></li>
      </ul>
    </nav>



  )
  console.log("second", props)
}

export default SideDrawer
