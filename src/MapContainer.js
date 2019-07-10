import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const MyMarker = ({ text }) => <div>{text}</div>;


class MapContainer extends Component {
    static defaultProps ={
      center:{
        lat:39.742043,
        lng:-104.991531
      },
      zoom:11
    }




    render(){
      return(
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <MyMarker
            lat={39.742043}
            lng={-104.991531}
            text="Yo"
          />
        </GoogleMapReact>
        </div>
      )
    }
}

export default MapContainer
