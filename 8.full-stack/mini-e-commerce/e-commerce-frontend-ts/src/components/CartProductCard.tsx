import DZD from "@client/utils/pricing";
import useCart from "../hooks/useCart";

export default function CartProductCard({ product, quantity }: ProductCartI) {
  const { addToCart, removeFromCart } = useCart();
  return (
    <div className="flex min-w-md justify-between overflow-hidden rounded-3xl border">
      <img
        src={
          product.image ||
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        alt="product image"
        className="w-32 object-cover"
      />
      <div className="flex flex-col p-2 gap-1">
        <h4 className="text-xl font-bold">{product.name}</h4>
        <h5>quantity:{quantity}</h5>
        <h5>price:{DZD.ar.format(product.price.current)}</h5>
        <div className="flex gap-2">
          <button
            className="btn"
            onClick={() => {
              removeFromCart(product._id);
            }}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => {
              addToCart(product);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
