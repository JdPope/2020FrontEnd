import React, {Component} from 'react'

export default class AddNewMarker extends Component {
    state = {
      newMarkerForm:{
        latitude:"",
        longitude: "",
        image_url: ""
      }
    }

    updateMarkerForm = event => {
      const key = event.target.name
      const value = event.target.value
      this.setState(state => {
        state.newMarkerForm[key] = value
        return state
      })
    }

    addMarker = event => {
      event.preventDefault()
      const newMarker = {
        latitude: this.state.newMarkerForm.latitude,
        longitude: this.state.newMarkerForm.longitude,
        image_url: this.state.newMarkerForm.image_url,
      }
      this.props.addMarker(newMarker)
      this.setState({
        newMarkerForm:{
          latitude:"",
          longitude: "",
          image_url: ""
        }
      })
    }

  render (){
    return(
      <form onSubmit={this.addMarker} className="add-Marker">
          <h2>Add New Marker</h2>
          <input onChange={this.updateMarkerForm} name="latitude" type="float" required placeholder="latitude" value={this.state.newMarkerForm.latitude} />
          <input onChange={this.updateMarkerForm} name="longitude" type="float" required placeholder="longitude" value={this.state.newMarkerForm.longitude} />
          <input onChange={this.updateMarkerForm} name="image_url" type="text" required placeholder= "image_url" value={this.state.newMarkerForm.image_url} >
          </input>
          <input type="submit" value="Add" />
      </form>

    )

  }
}
