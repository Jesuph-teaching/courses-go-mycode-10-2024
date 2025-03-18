import { df } from "@client/utils/date";
import DZD from "@client/utils/pricing";
import { stock } from "@client/utils/stock";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router";
import EditOrder from "./components/EditOrder";
const columnsHelper = createColumnHelper<OrderI>();

const columns = [
  columnsHelper.accessor("_id", {
    header: "Order ID",
    cell({ row }) {
      const order = row.original;
      return (
        <Link to={"/admin/order/" + order._id} className="btn btn-ghost h-auto">
          <div className="avatar">
            <div className="mask mask-squircle w-24 p-2">
              <span className="icon-[solar--cart-3-bold-duotone] w-20 h-20" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{order._id}</h3>
          </div>
        </Link>
      );
    },
  }),
  columnsHelper.accessor("cart", {
    header: "products count",
    cell({ getValue }) {
      const value = getValue();
      return (
        <span className="badge badge-neutral">
          {value.reduce((acc, { quantity }) => acc + quantity, 0)}
        </span>
      );
    },
  }),
  columnsHelper.accessor("total", {
    header: "Total",
    cell({ getValue }) {
      const value = getValue();
      return (
        <span className="badge badge-neutral">{DZD.en.format(value)}</span>
      );
    },
  }),

  columnsHelper.accessor("delivery.province", {
    header: "Province",
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
          <EditOrder {...row.original} />
        </div>
      );
    },
  }),
] as ColumnDef<OrderI>[];
export default columns;
