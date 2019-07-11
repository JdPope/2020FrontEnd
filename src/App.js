import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import MapContainer from './MapContainer'
import Navbar from './Navbar/Navbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
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
  let url = 'https://lit-cliffs-51825.herokuapp.com/markers'
  fetch(url)
    .then(response => response.json())
    .then(result => this.setState({markers: result}))

}

displayMarkers(){


}

render(){
  let sideDrawer;
  let backdrop;

  if (this.state.sideDrawerOpen){
    sideDrawer = <SideDrawer/>
    backdrop =   <Backdrop click={this.backdropClickHandler}/>
  }
  return(
    <div style={{height:'100vh'}}>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
      <main style={{marginTop:'80px'}}>
        <MapContainer markers={this.state.markers}/>
      </main>


    </div>
  )
}
}
