import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from '../pages/login';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
         
              <Link to="/">Home</Link>
            
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
      
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Home/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

