import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import MapContainer from './MapContainer'
import Navbar from './Navbar/Navbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import AddNewMarker from './AddNewMarker/AddNewMarker'
import EditDeleteMarker from './EditDeleteMarker/EditDeleteMarker'
import {BrowserRouter as Router, Route,Link } from 'react-router-dom'

const url = 'https://lit-cliffs-51825.herokuapp.com/markers'

export default class App extends Component {

constructor(props){
  super(props)
  this.state = {
    sideDrawerOpen: false,
    markers: [],
    currentId: -1
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

idClickhandler = (event, index) =>{
  console.log("index", index)
  this.setState({currentId:index})
}


componentDidMount(){
  fetch(url)
    .then(response => response.json())
    .then(result => this.setState({markers: result}))

}


deleteMarker = () => {
  const filteredMarkers = this.state.markers.filter(marker => marker.id !=this.state.currentId)
  this.setState({markers:filteredMarkers})
fetch(`https://lit-cliffs-51825.herokuapp.com/markers/${this.state.currentId}`,{
  method: "DELETE"})
}


editMarker = (marker) => {
          fetch(`https://lit-cliffs-51825.herokuapp.com/markers/${this.state.currentId}`, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(marker)
            })
          }

addMarker = newMarker => {
  console.log(newMarker)
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
        <Route exact path="/AddNewMarker" render={(props)=> <AddNewMarker {...props} addMarker={this.addMarker} /> }/>
        <Route exact path="/EditDeleteMarker" render={(props)=><EditDeleteMarker {...props} markers={this.state.markers}  currentId={this.state.currentId} deleteMarker={this.deleteMarker} editMarker={this.editMarker}/>}/>
        <MapContainer markers={this.state.markers} idClickhandler={this.idClickhandler}/>
      </main>
    </div>
    </Router>
  )
}
}
