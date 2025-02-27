interface UserListProps {
  users: any[];
}

// 유닛 테스트
const UserList = ({ users }: UserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </ul>
  );
};

// function UserList({ users }: UserListProps) {
//   const renderedUsers = users.map((user) => {
//     return (
//       <tr key={user.name}>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//       </tr>
//     );
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody data-testid="user-list">{renderedUsers}</tbody>
//     </table>
//   );
// }

export default UserList;
