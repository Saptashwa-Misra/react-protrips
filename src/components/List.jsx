import React from 'react';
import trips from '../trips.json'
import '../index.css'
class List extends React.Component
{
  constructor(props) 
  {
    super(props)
    this.state={
        type: 'all'
    }
  }

  filterAll = (event) =>{
    this.setState({type:event.target.value})
    document.getElementById('Trips_Heading').innerHTML="All Trips"
  }

  filterTrek = (event) =>{
    this.setState({type:event.target.value})
    document.getElementById('Trips_Heading').innerHTML="Trek Trips"
  }

  filterClub = (event) =>{
    this.setState({type:event.target.value})
    document.getElementById('Trips_Heading').innerHTML="Club Trips"
  }

  filterTropic = (event) =>{
    this.setState({type:event.target.value})
    document.getElementById('Trips_Heading').innerHTML="Tropic Trips"
  }

  
  render()
  {
    return <>
        <div className='Body'>
            <h1 id='Trips_Heading'>All Trips</h1>
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                    <>{this.displayRecords()}</>
                </table>
            </div>
            <div className='Input_List'>
                <label>Filter by: </label>
                <input type="radio" name="type" value="all" onChange={this.filterAll}/><label> All </label>
                <input type="radio" name="type" value="trek" onChange={this.filterTrek} /><label> Treks </label>
                <input type="radio" name="type" value="club" onChange={this.filterClub}/><label> Clubs </label>
                <input type="radio" name="type" value="tropic" onChange={this.filterTropic}/><label> Tropics </label>
            </div>
        </div>
    </>
  }

  displayRecords = () => {
    if (this.state.type==='all')
    {
        let record = trips.map((items)=>(
        <tr>
            <td><span>{items.date}</span></td>
            <td><span>{items.place}</span></td>
            <td><span>{items.type}</span></td>
        </tr>
        ))
        console.log("Display record" +record)
        return record
    }
    else if (this.state.type === 'trek')
    {
        let record_trek = trips.filter(element=>element.type==='Trek')
        let record = record_trek.map((items)=>(
            <tr>
                <td><span>{items.date}</span></td>
                <td><span>{items.place}</span></td>
                <td><span>{items.type}</span></td>
            </tr>
            ))
        return record
    }
    else if (this.state.type === 'club')
    {
        let record_trek = trips.filter(element=>element.type==='Club')
        let record = record_trek.map((items)=>(
            <tr>
                <td><span>{items.date}</span></td>
                <td><span>{items.place}</span></td>
                <td><span>{items.type}</span></td>
            </tr>
            ))
        return record
    }
    else if (this.state.type === 'tropic')
    {
        let record_trek = trips.filter(element=>element.type==='Tropic')
        let record = record_trek.map((items)=>(
            <tr>
                <td><span>{items.date}</span></td>
                <td><span>{items.place}</span></td>
                <td><span>{items.type}</span></td>
            </tr>
            ))
        return record
    }
  }

}
export {List}