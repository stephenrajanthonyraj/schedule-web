import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Availability from './components/Availabilty'
import AdminDashboard from './components/adminDashboard'
import Sessions from './components/Session'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/availability">
            <Availability user={user} />
          </Route>
          <Route path="/admin-dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/sessions">
            <Sessions user={user} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
