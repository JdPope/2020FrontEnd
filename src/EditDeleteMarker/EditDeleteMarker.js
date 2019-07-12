import React, {Component} from 'react'
import './EditDeleteMarker.css'

export default class EditDeleteMarker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      latitude:props.latitude,
      longitude:props.longitude,
      image_url:props.image_url,
      dog_id:props.dog_id
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleDelete = (event) => {
    event.preventDefault()
    this.props.deleteMarker()
  }

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault()
    this.props.editMarker(this.state)
    alert("Your Marker Has Been Edited!")

  }



  render(props){
    console.log("props", this.props.currentId)
    return(

      <form onSubmit={this.handleSubmit} className="Edit-Marker">
          <h2 className="formheading">Edit Marker</h2>
          <input onChange={this.handleChange} name="latitude" type="float" required placeholder="latitude" value={this.state.latitude} />
          <input onChange={this.handleChange} name="longitude" type="float" required placeholder="longitude" value={this.state.longitude} />
          <input onChange={this.handleChange} name="image_url" type="text" required placeholder= "image url" value={this.state.image_url} >
          </input>
          <select onChange={this.handleChange} name="dog_id" type="integer" required value={this.state.dog_id} >
                    <option disabled>Please select a Dog</option>
                    <option value="4">Wiggley F. Buckley</option>
                    <option value="5">Mo'Bitin'</option>
                    <option value="6">Frankie</option>
                </select>

          <input type="submit" value="Submit" />
          <button onClick={this.handleDelete}>Delete</button>
      </form>




    )
  }

}
