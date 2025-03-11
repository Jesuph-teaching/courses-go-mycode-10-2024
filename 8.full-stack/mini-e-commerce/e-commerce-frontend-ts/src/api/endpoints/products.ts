import { myAPIConfig } from "../axiosConfigs";

export async function getProducts({ search, sorting }: ProductSearchI) {
  const searchParams = new URLSearchParams({
    sortingDirection: sorting.dir,
    sorting: sorting.path,
  });
  if (search) searchParams.append("search", search);
  const response = await myAPIConfig.get<{ data: ProductI[] }>(
    "/products?" + searchParams.toString()
  );
  return response.data;
}
