import { useState } from "react";
import Card from "./Components/Card";
import SwitchTheme from "./SwitchTheme";
import UserForm from "./Components/UserForm";
import CardGenerator from "./Components/CardGenerator";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <SwitchTheme />
      <UserForm />
      <CardGenerator />

      <Modal />
      {/* <div className="w-full bg-amber-600 h-2"></div>
      <CardGenerator /> */}
    </>
  );
}

export default App;
