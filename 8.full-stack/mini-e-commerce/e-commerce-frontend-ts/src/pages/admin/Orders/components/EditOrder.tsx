import popupEvents from "@client/events/popupsEvents";
import { useQueryClient } from "@tanstack/react-query";

export default function EditOrder(order: OrderI) {
  const client = useQueryClient();

  return (
    <button
      className="btn btn-info btn-outline"
      onClick={() => {
        popupEvents.emit("open", "edit-order", order);
        function editOrder(toUpdate: boolean) {
          if (toUpdate)
            client.invalidateQueries({
              queryKey: ["orders"],
            });
          popupEvents.removeListener("close", editOrder);
        }
        popupEvents.addListener("close", editOrder);
      }}
    >
      <span className="icon-[solar--pen-new-square-bold] w-4 h-4" />
    </button>
  );
}
