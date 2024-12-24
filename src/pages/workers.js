import { useState } from 'react';

export default function Workers() {
  const [workers, setWorkers] = useState([]);
  const [newWorker, setNewWorker] = useState('');
  const [admin, setAdmin] = useState(true); // Replace with proper auth check

  const addWorker = () => {
    if (newWorker.trim() && admin) {
      setWorkers([...workers, { name: newWorker, attended: false }]);
      setNewWorker('');
    }
  };

  const toggleAttendance = (index) => {
    setWorkers((prev) =>
      prev.map((worker, i) =>
        i === index ? { ...worker, attended: !worker.attended } : worker
      )
    );
  };

  if (!admin) return <h1>Access Denied</h1>;

  return (
    <div>
      <h1>Manage Workers</h1>
      <input
        type="text"
        placeholder="Add worker"
        value={newWorker}
        onChange={(e) => setNewWorker(e.target.value)}
      />
      <button onClick={addWorker}>Add Worker</button>

      <ul>
        {workers.map((worker, index) => (
          <li key={index}>
            {worker.name}
            <button onClick={() => toggleAttendance(index)}>
              {worker.attended ? 'Mark Absent' : 'Mark Present'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
