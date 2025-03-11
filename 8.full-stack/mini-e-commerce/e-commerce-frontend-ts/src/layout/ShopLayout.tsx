import { Outlet } from "react-router";
import Filters from "../components/Filters";
import ShopProvider from "../providers/ShopProvider";
import SearchBar from "../components/SearchBar";

export default function ShopLayout() {
	return (
		<ShopProvider>
			<div className="grid w-full grid-cols-12 gap-4 px-8">
				<div id="filters" className="relative col-span-3 flex">
					<Filters />
				</div>
				<div id="content" className="col-span-9 gap-4">
					<SearchBar />
					<div id="products-content" className="h-[200vh]">
						<Outlet />
					</div>
				</div>
			</div>
		</ShopProvider>
	);
}
