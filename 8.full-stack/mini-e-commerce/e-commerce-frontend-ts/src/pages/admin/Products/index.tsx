import { getProducts } from "@client/api/endpoints/products";
import Loading from "@client/components/Loading";
import Table from "@client/components/Table";
import { useQuery } from "@tanstack/react-query";
import columns from "./columns";
import popupEvents from "@client/events/popupsEvents";

export default function Products() {
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryFn: () =>
      getProducts({
        search: "",
        sorting: {
          dir: "asc",
          path: "createdAt",
        },
      }),
    queryKey: ["products"],
    initialData: [],
  });
  if (isFetching) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  return (
    <div className="w-full p-8 gap-8 flex flex-col">
      <h1 className="text-4xl">List of Products</h1>
      <button
        className="btn btn-primary ml-auto"
        onClick={() => {
          popupEvents.emit("open", "add-product", null);
          function addProduct(hasBeenAdded: boolean) {
            if (hasBeenAdded) refetch();
            popupEvents.removeListener("close", addProduct);
          }
          popupEvents.addListener("close", addProduct);
        }}
      >
        Add product
      </button>
      <Table columns={columns} data={data} />
    </div>
  );
}
