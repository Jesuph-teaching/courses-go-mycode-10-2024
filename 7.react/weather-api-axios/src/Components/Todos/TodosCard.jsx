import { useQuery } from "@tanstack/react-query";
import TodoInput from "./TodoInput";
import { myAPIConfig } from "../../api/axios-configurations";
import TodosDisplay from "./TodosDisplay";

export default function TodosCard() {
  const { data, isFetching, error, isError } = useQuery({
    queryFn: async function getTodos() {
      const response = await myAPIConfig.get("/todos");
      return response.data;
    },
    queryKey: ["todos"],
  });

  return (
    <div className="card bg-base-200 shadow-2xl w-full max-w-3xl mx-auto my-6">
      <div className="card-body">
        <h1 className="card-title mx-auto">Todos Card</h1>
        <TodoInput />
        <TodosDisplay
          data={data}
          isFetching={isFetching}
          error={error}
          isError={isError}
        />
      </div>
    </div>
  );
}
