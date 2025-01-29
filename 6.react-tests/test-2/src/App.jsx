import Counter from "./components/Counter"
import CounterFC from "./components/CounterFC"
import Form from "./components/Form"
import UserCard from "./components/UserCard"

function App() {

  return (
    <>
      <UserCard  name="Farouk" bio="A student of Web dev"/>
      <UserCard name="Karim" bio='FDSG'/>
      <UserCard name="Aymen"/>
      <Form/>
      <Counter/>
      <CounterFC/>
    </>
  )
}

export default App
