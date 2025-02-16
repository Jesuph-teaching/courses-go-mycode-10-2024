import { Outlet } from "react-router";
import Filters from "../components/Filters";
import ShopProvider from "../providers/ShopProvider";

export default function ShopLayout() {
  return (
    <ShopProvider>
      <div className="w-full grid grid-cols-12 gap-4 px-8">
        <div id="filters" className="flex  relative col-span-3 ">
          <Filters />
        </div>
        <div id="content" className="col-span-9 gap-4">
          <div id="products-navbar" className="bg-amber-400 h-8"></div>
          <div id="products-content" className="bg-green-400 h-[200vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </ShopProvider>
  );
}
