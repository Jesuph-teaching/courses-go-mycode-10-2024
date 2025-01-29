import { useState } from "react";
import "./style.css";
import UserCard from "../UserCard";

export default function Form() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  /* const [value, setValue] = useState(0); */
  return (
    <form className="bio-form">
      {/* <button
        type="button"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        value: {value}
      </button> */}
      <UserCard name={name} bio={bio} />
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(event) => {
          if (event.currentTarget.value.length < 20)
            setName(event.currentTarget.value);
          else console.error("length must be between 1 and 20 characters");
        }}
      />
      <textarea
        name="bio"
        placeholder="Biography"
        value={bio}
        onChange={(event) => {
          setBio(event.currentTarget.value);
        }}
      />
    </form>
  );
}
