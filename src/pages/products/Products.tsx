import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import "./products.css";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  const setOpenFn = (status: boolean) => {
    setOpen(status);
  };

  return (
    <div className="products">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="product" columns={columns} rows={products} />
      {open && (
        <Add slug="product" columns={columns} setOpenProps={setOpenFn} />
      )}
    </div>
  );
};

export default Products;
