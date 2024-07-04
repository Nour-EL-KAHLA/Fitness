import React, { useState } from "react";

interface UserRowProps {
  user: any;
  users: any[];
  deleteUser: (userId: any) => void;
  updateUser: (userId: any, roleId: any, coach: any) => void;
}

const UserRow: React.FC<UserRowProps> = ({
  user,
  users,
  updateUser,
  deleteUser,
}) => {
  const [roleId, setRoleId] = useState(user.roles[0].id);
  const [coach, setCoachUsername] = useState(user.program?.coach?.id || "");

  const handleSave = () => {
    updateUser(user.id, roleId || null, coach);
  };
  const handledelete = () => {
    deleteUser(user.id);
  };
  return (
    <tr className="border-b hover:bg-slate-100 bg-slate-50">
      <td className="p-3 px-5">{user.username}</td>
      <td className="p-3 px-5">{user.email}</td>
      <td className="p-3 px-5">{user.sexe}</td>
      <td className="p-3 px-5">
        <select
          className="bg-transparent border-b-2 border-gray-300 py-2"
          value={roleId}
          onChange={(e) => setRoleId(parseInt(e.target.value))}
        >
          <option value={1}>Admin</option>
          <option value={3}>Coach</option>
          <option value={2}>Member</option>
        </select>
      </td>
      <td className="p-3 px-5">
        <select
          className="bg-transparent border-b-2 border-gray-300 py-2"
          value={coach}
          onChange={(e) => setCoachUsername(e.target.value)}
          disabled={roleId === 3 || roleId === 1}
        >
          {users
            .filter((u) => u.roles[0]?.id === 3)
            .map((coach) => (
              <option key={coach.id} value={coach.id}>
                {coach.username}
              </option>
            ))}
          <option value="">Undefined</option>
        </select>
      </td>
      <td className="p-3 px-5 flex justify-end">
        <button
          type="button"
          className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handledelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
