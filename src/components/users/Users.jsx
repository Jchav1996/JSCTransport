import { Link, useLoaderData } from "react-router-dom";


export const Users = () => {
  const users = useLoaderData();

  return (
    <ul style={{backgroundColor: "white"}}>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/user/${user.email}}`}>{user.email}</Link>
        </li>
      ))}
    </ul>
  );
};
