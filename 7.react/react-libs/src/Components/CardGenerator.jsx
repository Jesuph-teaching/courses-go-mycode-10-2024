import { useEffect, useState } from "react";
import userFormEvent from "../events/userFormEvents";
import Card from "./Card";

export default function CardGenerator() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const createFn = (data) => {
      setUsers((prev) => [...prev, data]);
    };
    const deleteFn = (id) => {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    };
    userFormEvent.addListener("create-user", createFn);
    userFormEvent.addListener("delete-user", deleteFn);
    return () => {
      userFormEvent.removeListener("create-user", createFn);
      userFormEvent.removeListener("delete-user", deleteFn);
    };
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} name={user.name} id={user.id} bio={user.bio} />
      ))}
    </div>
  );
}
