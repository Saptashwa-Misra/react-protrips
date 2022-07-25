import React from 'react';
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
} from "react-router-dom";
import { AddTrip } from './components/AddTrip';
import { Home } from './components/Home';
import { List } from './components/List';
import './App.css';


function App() {
  return (
    <>
      <div className='app'>     
        <BrowserRouter>
        <div className='nav'>
          <Link to='react-protrips' className='link'><i class="bi bi-house-door-fill"></i></Link>
          <Link to='react-protrips/addtrip' className='link'><i class="bi bi-calendar-plus"></i></Link>
          <Link to='react-protrips/list' className='link'><i class="bi bi-grid-3x3"></i></Link>
        </div>
          <Routes>
            <Route path="react-protrips" element={<Home/>} />
            <Route path="react-protrips/list" element={<List/>} />
            <Route path="react-protrips/addtrip" element={<AddTrip/>} />
            <Route path="*" element={<h1>No Page Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
