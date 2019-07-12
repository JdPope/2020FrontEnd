import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};
export class MapContainer extends Component {

  displayMarkers = (props) => {
    return this.props.markers.map((marker, index) => {
      return <Marker key={index} id={index} position={{
       lat: marker.latitude,
       lng: marker.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 39.739235, lng: -104.990250}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey://*{your api key here}*
})(MapContainer);
