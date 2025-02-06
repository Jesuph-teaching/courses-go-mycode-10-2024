import { useState } from "react";
import { myAPIConfig } from "../api/axios-configurations";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function HandleChange(inputName) {
    return (e) => {
      setForm((prev) => ({ ...prev, [inputName]: e.target.value }));
    };
  }
  return (
    <form
      className="card"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const response = await myAPIConfig.post("/auth/login", form);
          if (response.status === 200) {
            const { firstName, lastName } = response.data.user;
            toast.success(
              `Logged in successfully : Welcome ${firstName} ${lastName}`
            );
          }
        } catch (err) {
          const { error } = err.response.data;
          toast.error("Login failed: " + error);
        }
      }}
    >
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input"
            value={form.email}
            onChange={HandleChange("email")}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={HandleChange("password")}
            className="input"
          />
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}
