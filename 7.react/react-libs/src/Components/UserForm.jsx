import { useState } from "react";
import userFormEvent from "../events/userFormEvents";

export default function UserForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  return (
    <form
      className="flex flex-col w-[300px] p-4"
      onSubmit={(e) => {
        e.preventDefault();
        userFormEvent.emit("create-user", { name, bio, id: Date.now() });
      }}
    >
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <textarea
        type="text"
        name="bio"
        value={bio}
        onChange={(e) => {
          setBio(e.currentTarget.value);
        }}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
