import { ChangeEvent, useEffect, useState } from "react";
import { useShop } from "../hooks";
import { useDebounce } from "@uidotdev/usehooks";
const sortingMap: Partial<Record<ProductSearchI["sorting"]["path"], string>> = {
  name: "Name",
  "price.current": "Price",
  createdAt: "Newest",
};
export default function SearchBar() {
  const { sorting, setSorting, setSearch } = useShop();
  const [currentSearch, setCurrentSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(currentSearch, 300);
  useEffect(() => {
    setLoading(true);
  }, [currentSearch]);
  useEffect(() => {
    setLoading(false);
    setSearch(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);
  return (
    <form id="products-navbar" className="flex w-full flex-col gap-2 p-4">
      <div className="flex w-full justify-between gap-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="search"
            placeholder="Search for products"
            className="grow"
            value={currentSearch}
            onChange={(e) => {
              setCurrentSearch(e.target.value);
            }}
          />
          {loading ? (
            <span className="loading loading-dots" />
          ) : (
            <span className="icon-[solar--magnifer-line-duotone] h-4 w-4" />
          )}
        </label>
        <div className="flex gap-2">
          <select
            name="sorting"
            className="select select-bordered w-full max-w-32"
            value={sorting.path}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setSorting((p) => ({
                ...p,
                path: e.target.value as ProductSearchI["sorting"]["path"],
              }));
            }}
          >
            {Object.entries(sortingMap).map(([value, display]) => (
              <option key={value} value={value}>
                {display}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setSorting((p) => ({
                ...p,
                dir: p.dir === "asc" ? "desc" : "asc",
              }));
            }}
            type="button"
            className="btn btn-ghost w-8 p-0"
          >
            <span
              className={
                "icon-[solar--sort-vertical-line-duotone] h-4 w-4 " +
                (sorting.dir === "asc" ? "rotate-0" : "rotate-180")
              }
            />
          </button>
        </div>
      </div>
      <p>
        You are searching for : {debouncedSearchTerm}, sorted by :{" "}
        {sortingMap[sorting.path]}
      </p>
    </form>
  );
}
