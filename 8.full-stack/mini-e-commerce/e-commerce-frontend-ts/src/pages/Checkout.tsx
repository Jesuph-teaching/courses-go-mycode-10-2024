import { createOrder } from "@client/api/endpoints/order";
import CartProductCard from "@client/components/CartProductCard";
import { useCart } from "@client/hooks";
import DZD from "@client/utils/pricing";
import { provincesPrices } from "@common/provinces-prices";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import z, { ZodType } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
const deliverSchema: ZodType<ShopOrderI["delivery"]> = z.object({
  address: z.string({ message: "Address is required" }),
  city: z.string({
    message: "city is required",
  }),
  phone: z.string({ message: "Phone is required" }),
  province: z
    .number()
    .min(1, "The algerian province must be between 1 and 58")
    .max(58, "The algerian province must be between 1 and 58"),
});
export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const { mutateAsync: CreateOrder, isPending } = useMutation({
    mutationFn: createOrder,
    mutationKey: ["create-order"],
    onError(error) {
      toast.error(`im coming to your home! 😈, ${error.message}`);
    },
    onSuccess(order) {
      toast.success(
        `order ${order._id} has been created successfully, your order will be delivered in 3days`
      );
      clearCart();
    },
  });
  return (
    <Formik<ShopOrderI["delivery"]>
      initialValues={{
        address: "",
        city: "",
        phone: "",
        province: 16,
      }}
      validationSchema={toFormikValidationSchema(deliverSchema)}
      onSubmit={(values) => {
        CreateOrder({
          cart: cart.map((element) => ({
            product: element.product._id,
            quantity: element.quantity,
          })),
          delivery: values,
        });
        console.log(values);
      }}
    >
      <div className="form container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col p-4 gap-4">
          <h1 className="text-3xl font-bold">Product selected</h1>
          {cart.length > 0 ? (
            <>
              {cart.map((elm) => (
                <CartProductCard
                  key={elm.product._id}
                  product={elm.product}
                  quantity={elm.quantity}
                />
              ))}
              <h5>Subtotal : {DZD.ar.format(total)}</h5>
            </>
          ) : (
            <p>There is no product selected yet.</p>
          )}
        </div>
        <Form className="form p-4">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <fieldset className="fieldset w-full">
            <label className="fieldset-legend" htmlFor="province">
              Province
            </label>
            <Field
              id="province"
              name="province"
              as="select"
              className="select w-full"
              placeholder="Type"
            >
              {provincesPrices.map((province) => (
                <option value={province.id}>
                  {province.id} ~ {province.name.en}-{province.name.ar} (
                  {province.price} DZD)
                </option>
              ))}
            </Field>
            <ErrorMessage name="province" />
          </fieldset>
          <fieldset className="fieldset w-full">
            <label className="fieldset-legend" htmlFor="city">
              City
            </label>
            <Field type="city" name="city" className={"input w-full"} />
            <ErrorMessage name="city" />
          </fieldset>
          <fieldset className="fieldset w-full">
            <label className="fieldset-legend" htmlFor="address">
              Address
            </label>
            <Field type="address" name="address" className={"input w-full"} />
            <ErrorMessage name="address" />
          </fieldset>
          <fieldset className="fieldset w-full">
            <label className="fieldset-legend" htmlFor="phone">
              Phone mobile
            </label>
            <Field type="phone" name="phone" className={"input w-full"} />
            <ErrorMessage name="phone" />
          </fieldset>
          <button
            disabled={isPending}
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            {isPending ? <span className="loading w-4 h-4" /> : null}
            checkout
          </button>
        </Form>
      </div>
    </Formik>
  );
}
