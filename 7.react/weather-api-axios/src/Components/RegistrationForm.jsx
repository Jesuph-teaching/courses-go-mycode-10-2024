import { useState } from "react";
import { myAPIConfig } from "../api/axios-configurations";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
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
          const response = await myAPIConfig.post("/auth/register", form);
          if (response.status === 201) {
            const { firstName, lastName } = response.data.user;
            toast.success(
              `Registration completed successfully : Welcome ${firstName} ${lastName}`
            );
          }
        } catch (err) {
          const { error } = err.response.data;
          toast.error("Registration failed: " + error);
        }
      }}
    >
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            className="input"
            value={form.firstName}
            onChange={HandleChange("firstName")}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            className="input"
            value={form.lastName}
            onChange={HandleChange("lastName")}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend" htmlFor="">
            Birth date
          </label>
          <input
            type="date"
            name="birthDate"
            className="input"
            value={form.birthDate}
            onChange={HandleChange("birthDate")}
          />
        </fieldset>
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
          Register
        </button>
        {/*  <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            toast.error("Fouzi", {
              position: "top-right",
            });
          }}
        >
          toast notification
        </button> */}
      </div>
    </form>
  );
}
