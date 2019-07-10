import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
        >
        <Marker position={{ lat: 48.00, lng: -122.00}} />
      </Map>
     );
   }
 }

 export default GoogleApiWrapper({
   apiKey: //*{your api key here}*
 })(MapContainer);
