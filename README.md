### **[MUI X Data Grid](https://mui.com/x/react-data-grid/getting-started/#installation)**

```bash
npm install @mui/x-data-grid
npm install @mui/material @emotion/react @emotion/styled
```

User.tsx | Need to Pass, Column(Table Header), Row(Data to display)

```jsx
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.css";

const Users = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avater",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row?.img || "noavatar.png"} alt="" />;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      type: "boolean",
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (_value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;
```

Need to provide hight and width explectly otherwisely it may not work.

```jsx
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

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
    width: 200,
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
```

### **Creating Modal (CSS aspect)**

Users.tsx | Great tutorial for layouting

```jsx
const Users = () => {
  const [open, setOpen] = useState(false);

  const setOpenFn = (status: boolean) => {
    setOpen(status);
  };

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpenProps={setOpenFn} />}
    </div>
  );
};
```

Add.tsx

```jsx
import { FormEvent } from "react";

interface Props {
  slug: string;
  columns: GridColDef[];
  setOpenProps: (status: boolean) => void;
}

const Add = ({ slug, columns, setOpenProps }: Props) => {
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();

    // axios.post()
    console.log("From Submitted");
  };

  return (
    <div className="add">
      <div className="modle">
        <span className="close" onClick={() => setOpenProps(false)}>
          x
        </span>
        <h2>Add new {slug}</h2>
        <form onSubmit={handelSubmit} className="form">
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="form__item" key={column.field}>
                <label htmlFor={column.field}>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button className="form__button">Send</button>
        </form>
      </div>
    </div>
  );
};
```

add.css

```css
.add {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modle {
  padding: 5rem;
  border-radius: 10px;
  background: var(--main-bg);
  position: relative;
}

.modle h2 {
  color: var(--soft-color);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  line-height: 1;
}

.form {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  justify-content: space-between;
}

.form__item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 45%;
}

label {
  font-size: 1.4rem;
}

input {
  padding: 1rem;
  background: transparent;
  color: white;
  outline: none;
  border: 1px solid var(--soft-color);
  border-radius: 5px;
}

.form__button {
  width: 100%;
  padding: 1rem;
  cursor: pointer;
}
```
