import Loading from "@client/components/Loading";
import Table from "@client/components/Table";
import { useQuery } from "@tanstack/react-query";
import columns from "./columns";
import popupEvents from "@client/events/popupsEvents";
import { getOrders } from "@client/api/endpoints/manage-orders";

export default function Orders() {
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryFn: () => getOrders(),
    queryKey: ["orders"],
    initialData: [],
  });
  if (isFetching) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  return (
    <div className="w-full p-8 gap-8 flex flex-col">
      <h1 className="text-4xl">List of Products</h1>
      <div className="flex justify-end gap-2">
        <button className="btn " onClick={() => refetch()}>
          <span className="icon-[solar--refresh-bold-duotone] w-5 h-5" />
        </button>
        <button
          className="btn btn-primary"
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
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}
