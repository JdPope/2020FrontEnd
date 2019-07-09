import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

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
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
        />
     );
   }
 }

 export default GoogleApiWrapper({
   apiKey: 'AIzaSyCkevPs1g3D4AXNY2yTbTNW4388IBGa9_8'
 })(MapContainer);
