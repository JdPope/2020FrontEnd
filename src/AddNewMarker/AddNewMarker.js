import React, {Component} from 'react'

export default class AddNewMarker extends Component {
    state = {
      newMarkerForm:{
        latitude:"",
        longitude: "",
        image_url: "",
        dog_id:2
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
        dog_id: this.state.newMarkerForm.dog_id
      }
      this.props.addMarker(newMarker)
      this.setState({
        newMarkerForm:{
          latitude:"",
          longitude: "",
          image_url: "",
          dog_id:""
        }
      })
    }

  render (){
    return(
      <form onSubmit={this.addMarker} className="add-Marker">
          <h2>Add New Marker</h2>
          <input onChange={this.updateMarkerForm} name="latitude" type="float" required placeholder="latitude" value={this.state.newMarkerForm.latitude} />
          <input onChange={this.updateMarkerForm} name="longitude" type="float" required placeholder="longitude" value={this.state.newMarkerForm.longitude} />
          <input onChange={this.updateMarkerForm} name="image_url" type="text" required placeholder= "image url" value={this.state.newMarkerForm.image_url} >
          </input>
          <select onChange={this.updateMarkerForm} name="dog_id" required value={this.state.newMarkerForm.dog_id} >
                    <option disabled>Please select a Dog</option>
                    <option value="2">Wiggley F. Buckley</option>
                    <option value="3">Mo'Bitin'</option>
                    <option value="4">Frankie</option>
                </select>

          <input type="submit" value="Add" />
      </form>

    )

  }
}
