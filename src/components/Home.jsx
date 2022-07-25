import React from 'react';
import trips from '../trips.json';
import '../index.css'
import sun from './sun.svg'
import trek from './trek.svg'
import trophy from './trophy.svg'
class Home extends React.Component
{

  countTrek = () => {
    let count = 0
    for (let i =0; i<trips.length; i++)
        if(trips[i].type==='Trek')
            count++
    return count
  }

  countTropic = () => {
    let count = 0
    for (let i =0; i<trips.length; i++)
        if(trips[i].type==='Tropic')
            count++
    return count
  }

  countClub = () => {
    let count = 0
    for (let i =0; i<trips.length; i++)
        if(trips[i].type==='Club')
            count++
    return count
  }

  render()
  {    console.log(trips)
    return <>
        <div className='home'>
            <div className='trips'><span className='trips_size'>{trips.length}</span> trips</div>
            <div className='home_list'>
                <div className='home_list_elements'><span>{this.countTropic()}</span><img className = 'logo' src={sun} alt="Sun"/></div>
                <div className='home_list_elements'><span>{this.countTrek()}</span><img className = 'logo' src={trek} alt="Sun"/></div>
                <div className='home_list_elements'><span>{this.countClub()}</span><img className = 'logo' src={trophy} alt="Sun"/></div>
            </div>
        </div>
    </>
  }
}
export {Home}