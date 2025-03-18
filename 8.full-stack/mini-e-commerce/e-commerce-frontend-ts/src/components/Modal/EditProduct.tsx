import { useMutation } from "@tanstack/react-query";
import ProductForm from "./ProductForm";
import toast from "react-hot-toast";
import { editProduct } from "@client/api/endpoints/manage-product";

export default function EditProduct({
  product,
  onDone,
}: {
  product: ProductI;
  onDone: () => void;
}) {
  const { mutate, isPending } = useMutation({
    mutationFn: (p: BaseProductI) =>
      editProduct({ product: p, id: product._id }),
    mutationKey: ["add-product"],
    onSuccess(data) {
      toast.success(`product ${data.name} updated successfully`);
      onDone();
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return (
    <ProductForm
      title={"Updating product " + product.name}
      buttonTitle="Update"
      initialValues={{
        description: product.description,
        name: product.name,
        price: product.price,
        stock: product.stock,
        image: product.image,
      }}
      mutate={mutate}
      isPending={isPending}
    />
  );
}
