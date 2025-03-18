import { df } from "@client/utils/date";
import DZD from "@client/utils/pricing";
import { stock } from "@client/utils/stock";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router";
import DeleteProduct from "./components/DeleteProduct";
import EditProduct from "./components/EditProduct";
const columnsHelper = createColumnHelper<ProductI>();

const columns = [
  columnsHelper.accessor("name", {
    header: "Name",
    cell({ row }) {
      const product = row.original;
      return (
        <Link
          to={"/admin/products/" + product._id}
          className="btn btn-ghost h-auto"
        >
          <div className="avatar">
            <div className="mask mask-squircle w-24">
              <img src={product.image || "/product.webp"} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{product.name}</h3>
            <h5 className="text-neutral-500">{product._id}</h5>
          </div>
        </Link>
      );
    },
  }),
  columnsHelper.accessor("price", {
    header: "Original price",
    cell({ getValue }) {
      const value = getValue();
      return value.original ? (
        <span className="badge badge-neutral">
          {DZD.en.format(value.original)}
        </span>
      ) : null;
    },
  }),
  columnsHelper.accessor("price.current", {
    header: "Current price",
    cell({ getValue }) {
      const value = getValue();
      return value ? (
        <span className="badge badge-neutral">{DZD.en.format(value)}</span>
      ) : null;
    },
  }),
  columnsHelper.accessor("stock", {
    header: "Stock",
    cell({ getValue }) {
      return stock.format(getValue());
    },
  }),
  columnsHelper.accessor("createdAt", {
    header: "Created at",
    cell({ getValue }) {
      return df.format(new Date(getValue()));
    },
  }),
  columnsHelper.accessor("updatedAt", {
    header: "Updated at",
    cell({ getValue }) {
      return df.format(new Date(getValue()));
    },
  }),
  columnsHelper.display({
    header: "Actions",
    cell({ row }) {
      return (
        <div className="flex gap-2">
          <EditProduct {...row.original} />
          <DeleteProduct id={row.original._id} />
        </div>
      );
    },
  }),
] as ColumnDef<ProductI>[];
export default columns;
