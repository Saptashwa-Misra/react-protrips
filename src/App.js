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
          <Link to='/' className='link'><i class="bi bi-house-door-fill"></i></Link>
          <Link to='addtrip' className='link'><i class="bi bi-calendar-plus"></i></Link>
          <Link to='list' className='link'><i class="bi bi-grid-3x3"></i></Link>
        </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="list" element={<List/>} />
            <Route path="addtrip" element={<AddTrip/>} />
            <Route path="*" element={<h1>No match found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
