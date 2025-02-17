import useCart from "../hooks/useCart";

export default function CartProductCard({ product, quantity }) {
	const { addToCart, removeFromCart } = useCart();
	return (
		<div className="flex rounded-3xl border overflow-hidden">
			<img
				src={product.image}
				alt="product image"
				className="w-16 h-full"
			/>
			<div className="flex flex-col">
				<h4>{product.name}</h4>
				<h5>quantity:{quantity}</h5>
				<div className="flex gap-2">
					<button
						className="btn "
						onClick={() => {
							removeFromCart(product._id);
						}}
					>
						-
					</button>
					<button
						className="btn "
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
