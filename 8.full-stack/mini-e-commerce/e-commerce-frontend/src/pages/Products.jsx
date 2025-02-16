import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/endpoints/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { data, isFetching, isError, error } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });
  if (isFetching)
    return (
      <div className="w-full min-h-56 flex justify-center items-center">
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
    <div className="grid p-4 gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
