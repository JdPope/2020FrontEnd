import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import MapContainer from './MapContainer'
import Navbar from './Navbar/Navbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import AddNewMarker from './AddNewMarker/AddNewMarker'
import {BrowserRouter as Router, Route,Link } from 'react-router-dom'

const url = 'https://lit-cliffs-51825.herokuapp.com/markers'

export default class App extends Component {

constructor(props){
  super(props)
  this.state = {
    sideDrawerOpen: false,
    markers: []
  }
}
drawerToggleClickHandler = () =>{
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
  })
}

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}


componentDidMount(){
  fetch(url)
    .then(response => response.json())
    .then(result => this.setState({markers: result}))

}

addMarker = newMarker => {
       this.setState(state => {
           state.markers = [...this.state.markers, newMarker]
           return state
       })
       fetch(url, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(newMarker)
       }).catch(error => console.error(error.message))
   }

render(){
  let sideDrawer;
  let backdrop;

  if (this.state.sideDrawerOpen){
    sideDrawer = <SideDrawer/>
    backdrop =   <Backdrop click={this.backdropClickHandler}/>
  }
  return(
    <Router>
    <div style={{height:'100vh'}}>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <main style={{marginTop:'80px'}}>
        <Route exact path="/NewMarker" render={(props)=> <AddNewMarker {...props} addMarker={this.addMarker} /> }/>

        <MapContainer markers={this.state.markers}/>
      </main>
    </div>
    </Router>
  )
}
}
