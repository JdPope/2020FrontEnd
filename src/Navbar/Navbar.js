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
      <div className="Navbar_logo"><a href="/">The Pee-sidential Race 2020</a></div>
      <div className="spacer"/>
      <div className="Navbar_items">
        <ul>
          <li><a href="/">Dogs</a></li>
          <li><Link to={'/NewMarker'} className="nav-link">+New Marker</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)
}

export default Navbar
