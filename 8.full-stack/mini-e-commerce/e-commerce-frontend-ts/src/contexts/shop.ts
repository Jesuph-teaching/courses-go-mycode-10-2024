import { createContext, Dispatch } from "react";
interface ShopContextI {
  priceRange: { min: number; max: number };
  setPriceRange: Dispatch<
    React.SetStateAction<{
      min: number;
      max: number;
    }>
  >;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  sorting: ProductSearchI["sorting"];
  setSorting: Dispatch<React.SetStateAction<ProductSearchI["sorting"]>>;
  search: ProductSearchI["search"];
  setSearch: Dispatch<React.SetStateAction<ProductSearchI["search"]>>;
}
const ShopContext = createContext<ShopContextI | null>(null);

export default ShopContext;
