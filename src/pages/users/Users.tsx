import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./users.css";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "img",
    headerName: "Avatar",
    width: 60,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 80,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const setOpenFn = (status: boolean) => {
    setOpen(status);
  };

  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://react-admin-api-omega.vercel.app/api/users").then((res) =>
        res.json()
      ),
    staleTime: 10000, // 60 seconds: Data is considered fresh for 1 minute
  });

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="users" columns={columns} setOpenProps={setOpenFn} />}
    </div>
  );
};

export default Users;
