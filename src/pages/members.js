import { useState } from 'react';

export default function Members() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  const addMember = () => {
    if (newMember.trim()) {
      setMembers([...members, { name: newMember }]);
      setNewMember('');
    }
  };

  return (
    <div>
      <h1>Manage Members</h1>
      <input
        type="text"
        placeholder="Add member"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
      />
      <button onClick={addMember}>Add Member</button>

      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
