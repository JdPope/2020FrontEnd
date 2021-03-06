import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import './Navbar.css'
import ToggleButton from '../ToggleButton/ToggleButton'

const Navbar = props =>{

return(
  <header className="Navbar">
    <nav className="Navbar_nav">
      <div>
        <ToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="Navbar_logo"><a href="/">Pee-sidential Race 2020</a></div>
      <div className="spacer"/>
      <div className="Navbar_items">
        <ul>
          <li><Link to={'/AddNewMarker'} className="nav-link">+New Marker</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)
}

export default Navbar
