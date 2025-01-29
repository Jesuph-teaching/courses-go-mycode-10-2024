import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    console.log("username changed");
  }, [username]);
  return (
    <>
      <div className="card">
        <img width="100%" src={picture} alt="" />
        <div>
          <h4>@{username || "-not-entered-yet-"}</h4>
          <p>#{role || "-no-role-"}</p>
        </div>
      </div>
      <form className="card">
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onKeyDown={(e) => {
              console.log(e.code);
              e.preventDefault();
            }}
            onChange={(e) => {
              setUsername(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="role">role</label>
          <select
            id="role"
            type="role"
            value={role}
            onChange={(e) => {
              setRole(e.currentTarget.value);
              switch (e.currentTarget.value) {
                case "admin": {
                  setPicture(
                    "https://assets.contenthub.wolterskluwer.com/api/public/content/3d4aeb0f1ca8447e8c42334c873893d2?t=w854l"
                  );
                  break;
                }
                case "cashier": {
                  setPicture(
                    "https://retailsolutions.ie/wp-content/uploads/2024/06/3272-min.jpg"
                  );
                  break;
                }
                case "patté": {
                  setPicture(
                    "https://superetti.dz/wp-content/uploads/2022/01/3425-1.jpg"
                  );
                  break;
                }
              }
            }}
          >
            <option value="admin">Owner</option>
            <option value="cashier">Cashier</option>
            <option value="patté">Belate</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default App;
