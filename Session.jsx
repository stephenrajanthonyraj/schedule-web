import React, { useState, useEffect } from 'react';

function Sessions({ user }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch user's scheduled sessions
    fetch(`/api/sessions/${user}`)
      .then(response => response.json())
      .then(data => setSessions(data));
  }, [user]);

  return (
    <div>
      <h2>Scheduled Sessions for {user}</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            {session.start} - {session.end} with {session.attendees.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sessions;
