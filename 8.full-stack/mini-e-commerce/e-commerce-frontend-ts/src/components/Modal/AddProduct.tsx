import { addProduct } from "@client/api/endpoints/manage-product";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ProductForm from "./ProductForm";

export default function AddProduct({ onDone }: { onDone: () => void }) {
  const { mutate, isPending } = useMutation({
    mutationFn: addProduct,
    mutationKey: ["add-product"],
    onSuccess(data) {
      toast.success(`product ${data.name} created successfully`);
      onDone();
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return (
    <ProductForm
      title="Creating product"
      buttonTitle="Create product"
      initialValues={{
        description: "",
        name: "",
        price: {
          current: 0,
          original: undefined,
        },
        stock: 0,
        image: undefined,
      }}
      mutate={mutate}
      isPending={isPending}
    />
  );
}
