import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { myAPIConfig } from "../../api/axios-configurations";
import toast from "react-hot-toast";

export default function TodoElement({
  _id,
  title,
  description,
  dueDate,
  isCompleted,
}) {
  const client = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState({
    title: title,
    description: description,
    dueDate: dueDate,
  });
  const { isPending: isUpdating, mutateAsync: UpdateTodo } = useMutation({
    mutationFn: async function editTodo({ id, data }) {
      return myAPIConfig.put("/todos/" + id, data);
    },
    onSuccess(_, { id }) {
      toast.success(`Todo ${id} has been updated successfully`);
      client.invalidateQueries("todos");
    },
    onError(error, { id }) {
      toast.error(`Error happened while updating ${id}: ${error.message}`);
    },
  });
  const { isPending: isDeleting, mutateAsync: DeleteTodo } = useMutation({
    mutationFn: async function editTodo(id) {
      return myAPIConfig.delete("/todos/" + id);
    },
    onSuccess(_, id) {
      toast.success(`Todo ${id} has been deleted successfully`);
      client.invalidateQueries("todos");
    },
    onError(error, id) {
      toast.error(`Error happened while deleting ${id}: ${error.message}`);
    },
  });
  const { isPending: isCompleting, mutateAsync: CompleteTodo } = useMutation({
    mutationFn: async function editTodo({ id, isCompleted }) {
      return myAPIConfig.put(
        `/todos/${id}/${isCompleted ? "complete" : "uncomplete"}`
      );
    },
    onSuccess(_, { id }) {
      toast.success(`Todo ${id} has been completed successfully`);
      client.invalidateQueries("todos");
    },
    onError(error, { id }) {
      toast.error(`Error happened while completing ${id}: ${error.message}`);
    },
  });
  function handleTodoInputs(inputName) {
    return (e) => setInputValue((p) => ({ ...p, [inputName]: e.target.value }));
  }
  if (isEditing)
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          UpdateTodo({ id: _id, data: inputValue });
        }}
        className="flex flex-col"
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
        <button type="submit" className="btn btn-warning" disabled={isUpdating}>
          {isUpdating ? <span className="loading" /> : "Edit"}
        </button>
      </form>
    );
  return (
    <div className="flex w-full items-center border border-neutral-content rounded-2xl p-2 gap-4">
      <button
        onClick={() => {
          CompleteTodo({ id: _id, isCompleted: !isCompleted });
        }}
        disabled={isCompleting}
        className={
          "btn btn-circle btn-success " + (isCompleted ? "" : "btn-outline")
        }
      >
        {isCompleting ? <span className="loading" /> : "✓"}
      </button>
      <div>
        <h5 className="text-lg font-bold">{title}</h5>
        <p>{description}</p>
        <p>{new Date(dueDate).toLocaleDateString()}</p>
      </div>
      <div className="flex flex-col ml-auto gap-1">
        <button
          onClick={() => {
            setIsEditing(true);
          }}
          className="btn btn-warning btn-outline"
        >
          🖊️
        </button>
        <button
          onClick={() => {
            DeleteTodo(_id);
          }}
          disabled={isDeleting}
          className="btn btn-error btn-outline"
        >
          {isDeleting ? <span className="loading" /> : "🗑️"}
        </button>
      </div>
    </div>
  );
}
