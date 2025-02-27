import "./App.css";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <Counter />
      <UserCard
        name="Youcef"
        displayUser={(user) => {
          return (
            <>
              <h1>{user.name}</h1>
              <p>Age : {user.age}</p>
            </>
          );
        }}
        age={27}
        email="madadiyoucef@gmail.com"
      />
    </>
  );
}

export default App;
