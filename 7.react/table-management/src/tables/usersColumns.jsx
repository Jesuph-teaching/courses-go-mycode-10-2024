import { createColumnHelper } from "@tanstack/react-table";
const columnsHelper = createColumnHelper();

const usersColumns = [
  columnsHelper.group({
    header: "Name",
    columns: [
      columnsHelper.accessor("lastName", {
        header: "First Name",
      }),
      columnsHelper.accessor("firstName", {
        header: "Last Name",
      }),
    ],
  }),
  columnsHelper.group({
    header: "Information",
    columns: [
      columnsHelper.accessor("age", {
        header: "Age",
      }),
      columnsHelper.accessor("status", {
        header: "Status",
        cell: (row) => {
          const value = row.getValue();
          return (
            <span
              className={`badge ${
                value === "Married" ? "badge-error" : "badge-success"
              }`}
            >
              {value}
            </span>
          );
        },
      }),
    ],
  }),
  columnsHelper.group({
    header: "Logs",
    columns: [
      columnsHelper.accessor("progress", {
        header: "Progress",
      }),
      columnsHelper.accessor("visits", {
        header: "Visits",
        cell: (row) => {
          const value = row.getValue();
          return (
            <p className="flex justify-center items-center gap-2">
              {value} <span className="icon-[solar--eye-bold] w-4 h-4" />
            </p>
          );
        },
      }),
    ],
  }),
  columnsHelper.display({
    id: "action",
    header: "Actions",
    cell: (row) => {
      const data = row.getValue();
      return (
        <div className="flex gap-4">
          <button className="btn btn-primary">Hello</button>
          <button className="btn btn-error">goodby</button>
        </div>
      );
    },
  }),
];
export default usersColumns;
