import React from "react";
interface UserI {
  name: string;
  age: number;
}
interface UserCardProps extends UserI {
  email: string;
  displayUser(user: UserI): React.ReactNode;
}

export default function UserCard({
  name,
  email,
  age,
  displayUser,
}: UserCardProps) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{email}</h3>

      {displayUser({ name, age })}
    </div>
  );
}
