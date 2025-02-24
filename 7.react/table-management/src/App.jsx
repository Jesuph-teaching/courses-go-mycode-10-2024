import Table from "./components/Table";
import { users } from "./data/users";
import usersColumns from "./tables/usersColumns";

function App() {
  return (
    <div className="w-full max-w-3xl mx-auto my-24">
      <Table data={users} columns={usersColumns} />
    </div>
  );
}

export default App;
