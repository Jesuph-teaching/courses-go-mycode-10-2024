import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/endpoints/products";
import ProductCard from "../components/ProductCard";
import { useShop } from "../hooks";

export default function Products() {
	const { search, sorting } = useShop();
	const { data, isFetching, isError, error } = useQuery({
		queryFn: () => getProducts({ search, sorting }),
		queryKey: ["products", search, sorting.path, sorting.dir],
	});
	if (isFetching)
		return (
			<div className="flex min-h-56 w-full items-center justify-center">
				<span className="loading loading-xl" />
			</div>
		);
	if (isError)
		return (
			<div className="card">
				<h3 className="card-title">{error.message}</h3>
			</div>
		);
	const products = data.data.data;
	return (
		<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
			{products.map((product) => (
				<ProductCard product={product} key={product._id} />
			))}
		</div>
	);
}
