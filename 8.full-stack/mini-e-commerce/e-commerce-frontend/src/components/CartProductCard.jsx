import useCart from "../hooks/useCart";

export default function CartProductCard({ product, quantity }) {
	const { addToCart, removeFromCart } = useCart();
	return (
		<div className="flex min-w-md justify-between overflow-hidden rounded-3xl border">
			<img
				src={
					product.image ||
					"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
				}
				alt="product image"
				className="h-28 w-24 object-cover"
			/>
			<div className="flex flex-col">
				<h4>{product.name}</h4>
				<h5>quantity:{quantity}</h5>
				<h5>price:{product.price.current}</h5>
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
