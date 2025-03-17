interface ProductSearchI {
  search: string;
  sorting: {
    dir: "asc" | "desc";
    path: keyof ProductI | "price.current";
  };
}
interface ProductSearchQueryI extends ProductSearchI {
  sorting: ProductSearchI["sorting"]["path"];
  sortingDirection: ProductSearchI["sorting"]["dir"];
}
