import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import MapContainer from './MapContainer'
export default class App extends Component {

constructor(props){
  super(props)
  this.state = {

    markers: []
  }
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
  return(

    <div>
      <h1>Dog TEST For President 2020</h1>
      <h2>let's get some markers{this.state.markers.id}{console.log("test", this.state.markers)}</h2>
      <MapContainer markers={this.state.markers}/>
    </div>
  )
}
}
