import { useState } from "react";
import { myAPIConfig } from "../../api/axios-configurations";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function TodoInput() {
  const client = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async function addTodo(data) {
      return await myAPIConfig.post("/todos", data);
    },
    onSuccess: () => {
      toast.success("You have created todo successfully");
      setInputValue({
        title: "",
        description: "",
        dueDate: "",
      });
      client.invalidateQueries("todos");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  function handleTodoInputs(inputName) {
    return (e) => setInputValue((p) => ({ ...p, [inputName]: e.target.value }));
  }
  return (
    <form
      className="flex flex-col w-full gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync(inputValue);
      }}
    >
      <input
        onChange={handleTodoInputs("title")}
        value={inputValue.title}
        type="text"
        placeholder="add to todo"
        className="input w-full"
      />
      <textarea
        placeholder="Todo description"
        className="textarea w-full"
        onChange={handleTodoInputs("description")}
        value={inputValue.description}
      ></textarea>
      <input
        type="date"
        className="input w-full"
        onChange={handleTodoInputs("dueDate")}
        value={inputValue.dueDate}
      />
      <button type="submit" className="btn btn-primary" disabled={isPending}>
        {isPending ? <span className="loading" /> : "+ Add todo"}
      </button>
    </form>
  );
}
