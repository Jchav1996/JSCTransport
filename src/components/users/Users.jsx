import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/v2/users?size=10"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fecthing users:", error);
    return [];
  }
}

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
