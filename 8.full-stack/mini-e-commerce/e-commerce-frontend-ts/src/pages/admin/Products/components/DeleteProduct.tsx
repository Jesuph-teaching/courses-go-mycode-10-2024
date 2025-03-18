import { deleteProduct } from "@client/api/endpoints/manage-product";
import popupEvents from "@client/events/popupsEvents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function DeleteProduct({ id }: { id: string }) {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    mutationKey: ["delete-product"],
    onSuccess(message) {
      toast.success(message);
      client.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return (
    <button
      disabled={isPending}
      className="btn btn-error btn-outline"
      onClick={() => {
        popupEvents.emit("open", "delete-product", id);
        function deleteProduct(toDelete: boolean) {
          if (toDelete) mutate(id);
          popupEvents.removeListener("close", deleteProduct);
        }
        popupEvents.addListener("close", deleteProduct);
      }}
    >
      <span className="icon-[solar--trash-bin-trash-bold] w-4 h-4" />
    </button>
  );
}
