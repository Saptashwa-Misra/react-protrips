import React from 'react';
import trips from '../trips.json';
import '../index.css'

class AddTrip extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        date: '',
        place: '',
        type: ''
    }
  }

  changeDate = (event) =>{
    console.log(event.target.value)
    this.setState({date: event.target.value})
  }

  changePlace = (event) =>{
    console.log(event.target.value)
    this.setState({place: event.target.value})
  }

  changeType = (event) =>{
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  submitButton = () => {
    document.getElementById("submitted_or_not").innerText="SUBMITTED SUCCESSFULLY!!"
    trips.push(this.state)
    this.setstate={
        date: '',
        place: '',
        type: ''
    }
    console.log(trips[1])
  }

  render()
  {
    console.log('Render called')
    return <>
        <div class='Body'>
            <h1>Add a trip</h1>
            <label>Date: </label>
            <input type="date" className="inputs" onChange={this.changeDate} />
            <label>Place: </label>
            <input type="text" className="inputs" onChange={this.changePlace} />
            <label>Type: </label>
            <select className='inputs' onChange={this.changeType}>
            <option value=""> </option>
                <option value="Trek">Trek</option>
                <option value="Tropic">Tropic</option>
                <option value="Club">Club</option>
            </select>
            <button type='submit' className='Submit_button' onClick={this.submitButton}>SUBMIT</button>
            <span id='submitted_or_not'></span>
        </div>
    </>
  }
}
export {AddTrip}