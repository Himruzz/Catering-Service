import { useState } from 'react';

export default function Venue() {
  const [venues, setVenues] = useState([]);
  const [newVenue, setNewVenue] = useState('');

  const addVenue = () => {
    if (newVenue.trim()) {
      setVenues([...venues, newVenue]);
      setNewVenue('');
    }
  };

  return (
    <div>
      <h1>Manage Venues</h1>
      <input
        type="text"
        placeholder="Add venue"
        value={newVenue}
        onChange={(e) => setNewVenue(e.target.value)}
      />
      <button onClick={addVenue}>Add Venue</button>

      <ul>
        {venues.map((venue, index) => (
          <li key={index}>{venue}</li>
        ))}
      </ul>
    </div>
  );
}
