import { ReactNode, useState } from "react";
import ShopContext from "../contexts/shop";

export default function ShopProvider({ children }: { children: ReactNode }) {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState<ProductSearchI["sorting"]>({
    path: "createdAt",
    dir: "asc", // ascending or descending
  });
  const [search, setSearch] = useState<ProductSearchI["search"]>("");
  return (
    <ShopContext.Provider
      value={{
        priceRange,
        setPriceRange,
        page,
        setPage,
        sorting,
        setSorting,
        search,
        setSearch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
