import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    // Fetch all users
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    // Fetch user's availability
    fetch(`/api/availability/${user}`)
      .then(response => response.json())
      .then(data => setAvailability(data));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Select a user to view availability</h3>
        <ul>
          {users.map(user => (
            <li key={user} onClick={() => handleSelectUser(user)}>
              {user}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div>
          <h3>Availability for {selectedUser}</h3>
          <ul>
            {availability.map((slot, index) => (
              <li key={index}>
                {slot.start} - {slot.end}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
