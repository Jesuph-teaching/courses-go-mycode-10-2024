import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/endpoints/products";
import ProductCard from "../components/ProductCard";
import { useShop } from "../hooks";
import Loading from "@client/components/Loading";

export default function Products() {
  const { search, sorting } = useShop();
  const {
    data: products,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryFn: () => getProducts({ search, sorting }),
    queryKey: ["products", search, sorting.path, sorting.dir],
    initialData: [],
  });
  if (isFetching) return <Loading />;
  if (isError)
    return (
      <div className="card">
        <h3 className="card-title">{error.message}</h3>
      </div>
    );
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}
