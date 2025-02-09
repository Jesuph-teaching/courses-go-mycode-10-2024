import TodoElement from "./TodoElement";

export default function TodosDisplay({ data, isFetching, error, isError }) {
  if (isFetching)
    return (
      <div className="flex h-20 w-full">
        <span className="loading loading-lg" />
      </div>
    );
  if (isError) return <p>{error.message}</p>;
  return (
    <div className="flex w-full flex-col gap-2">
      {data.map((todo) => (
        <TodoElement key={todo._id} {...todo} />
      ))}
    </div>
  );
}
