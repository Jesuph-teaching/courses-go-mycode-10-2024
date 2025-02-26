import "./App.css";
import UserCard from "./components/UserCard";
const user1: UserI = {
  name: "Youcef",
  email: "madadiyoucef@gmail.com",
};
function App() {
  return (
    <>
      <UserCard {...user1} age={27} />
    </>
  );
}

export default App;
