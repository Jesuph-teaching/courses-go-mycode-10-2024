import { useEffect, useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setText("");
  }, [todos]);
  const addTodo = () => {
    setTodos([{ id: Date.now(), text: text, completed: false }, ...todos]);
  };
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your todo"
          className="border border-black/60 rounded-lg px-2"
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <button className="btn" onClick={addTodo}>
          +
        </button>
      </div>

      <ul className="list-disc">
        {todos.map((currentTodo, i) => {
          const setCompleted = () => {
            setTodos(
              todos.map((todo) =>
                todo.id === currentTodo.id
                  ? { ...todo, completed: !todo.completed }
                  : todo
              )
            );
          };
          const s = "btn";
          return (
            <li key={i} className="flex items-center justify-between">
              <span
                style={{ width: "100%" }}
                className={currentTodo.completed ? "line-through" : ""}
                onClick={setCompleted}
              >
                {currentTodo.text}
              </span>
              <button className={s}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
