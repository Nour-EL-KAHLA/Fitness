import React from "react";
import UserRow from "./UserRow";

interface UserTableProps {
  users: any[];
  updateUser: (userId: any, roleId: any, coach: any) => void;
  deleteUser: (userId: any) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  updateUser,
  deleteUser,
}) => {
  return (
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Name</th>
            <th className="text-left p-3 px-5">Email</th>
            <th className="text-left p-3 px-5">Sexe</th>
            <th className="text-left p-3 px-5">Role</th>
            <th className="text-left p-3 px-5">Coach</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user?.id}
              user={user}
              users={users}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
