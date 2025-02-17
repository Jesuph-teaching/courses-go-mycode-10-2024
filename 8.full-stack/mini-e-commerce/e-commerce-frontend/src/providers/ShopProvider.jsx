import { useState } from "react";
import ShopContext from "../contexts/shop";

export default function ShopProvider({ children }) {
	const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
	const [page, setPage] = useState(1);
	const [sorting, setSorting] = useState({
		path: "createdAt",
		dir: "asc", // ascending or descending
	});
	const [search, setSearch] = useState("");
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
