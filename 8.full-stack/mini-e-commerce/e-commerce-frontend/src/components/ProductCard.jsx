import useCart from "../hooks/useCart";

export default function ProductCard({ product }) {
	const { addToCart } = useCart();
	return (
		<div className="card bg-base-300">
			<figure>
				<img
					src={
						product.image ||
						"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<div className="flex justify-between">
					<div className="card-title">{product.name}</div>
					<div className="flex flex-col">
						<span className="badge badge-primary">
							${product.price.current}
						</span>
						{product.price.original && (
							<span className="badge line-through">
								${product.price.original}
							</span>
						)}
					</div>
				</div>
				<p>{product.description}</p>
				<div className="card-actions justify-end">
					<button
						className="btn btn-secondary"
						onClick={() => {
							addToCart(product);
						}}
					>
						Add to cart
					</button>
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
}
