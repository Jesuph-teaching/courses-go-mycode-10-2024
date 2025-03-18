import popupEvents from "@client/events/popupsEvents";
import { useQueryClient } from "@tanstack/react-query";

export default function EditProduct(product: ProductI) {
  const client = useQueryClient();

  return (
    <button
      className="btn btn-info btn-outline"
      onClick={() => {
        popupEvents.emit("open", "edit-product", product);
        function editProduct(toUpdate: boolean) {
          if (toUpdate)
            client.invalidateQueries({
              queryKey: ["products"],
            });
          popupEvents.removeListener("close", editProduct);
        }
        popupEvents.addListener("close", editProduct);
      }}
    >
      <span className="icon-[solar--pen-new-square-bold] w-4 h-4" />
    </button>
  );
}
