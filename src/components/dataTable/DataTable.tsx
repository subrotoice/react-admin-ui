import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.css";
import { Link } from "react-router-dom";

interface Props {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

const DataTable = ({ columns, rows, slug }: Props) => {
  const handelDelete = (id: number) => {
    // axios.delete(`/api/${slug}/${id}`);
    console.log(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handelDelete(params.row.id)}>
            <img src="delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div>
      <DataGrid
        style={{ width: "100%" }}
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
