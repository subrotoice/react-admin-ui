import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import "./products.css";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 30,
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

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:8800/api/products").then((res) => res.json()),
    staleTime: 10000, // 60 seconds: Data is considered fresh for 1 minute
  });

  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={products!} />
      )}
      {open && (
        <Add slug="products" columns={columns} setOpenProps={setOpenFn} />
      )}
    </div>
  );
};

export default Products;
