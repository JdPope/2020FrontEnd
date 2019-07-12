import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

const mapStyles = {
  width: '100%',
  height: '100%',
};
export class MapContainer extends Component {

    state = {
      redirect: false
    }
    setRedirect = (event, index) => {
      console.log("index", index)

      // const value = event.target.id
      // console.log("click")
      this.setState({
        redirect: true,
        // currentId: value
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/EditDeleteMarker' />
      }
    }

  displayMarkers = (props) => {

    return this.props.markers.map((marker, index) => {
      return <Marker key={index} id={marker.id} position={{
       lat: marker.latitude,
       lng: marker.longitude
     }}
     onClick={(e) => this.setRedirect(e, index = marker.id)} />
    })

  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 39.739235, lng: -104.990250}}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 	//*{your api key here}*
})(MapContainer);
