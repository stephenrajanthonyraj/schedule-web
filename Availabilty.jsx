import React, { useState, useEffect } from 'react';

function Availability({ user }) {
  const [availability, setAvailability] = useState([]);
  const [newSlot, setNewSlot] = useState({ start: '', end: '' });

  useEffect(() => {
    // Fetch user's availability from the backend
    fetch(`/api/availability/${user}`)
      .then(response => response.json())
      .then(data => setAvailability(data));
  }, [user]);

  const handleAddAvailability = () => {
    fetch('/api/availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, ...newSlot }),
    })
    .then(response => response.json())
    .then(data => {
      setAvailability([...availability, data]);
      setNewSlot({ start: '', end: '' });
    });
  };

  return (
    <div>
      <h2>Availability for {user}</h2>
      <div>
        <input
          type="datetime-local"
          value={newSlot.start}
          onChange={(e) => setNewSlot({ ...newSlot, start: e.target.value })}
        />
        <input
          type="datetime-local"
          value={newSlot.end}
          onChange={(e) => setNewSlot({ ...newSlot, end: e.target.value })}
        />
        <button onClick={handleAddAvailability}>Add Slot</button>
      </div>
      <ul>
        {availability.map((slot, index) => (
          <li key={index}>
            {slot.start} - {slot.end}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Availability;
