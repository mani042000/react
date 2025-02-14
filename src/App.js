import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Mydashboard from './Modules/dashboard';
import { } from '../src/App.css';




function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path='/dashboard' element={<Mydashboard/>}/>
        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
