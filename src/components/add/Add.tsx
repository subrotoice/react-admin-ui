import { GridColDef } from "@mui/x-data-grid";
import "./add.css";
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

export default Add;
