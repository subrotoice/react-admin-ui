import { GridColDef } from "@mui/x-data-grid";
import "./add.css";
import { FormEvent } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

interface Props {
  slug: string;
  columns: GridColDef[];
  setOpenProps: (status: boolean) => void;
}

const Add = ({ slug, columns, setOpenProps }: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      fetch(`https://react-admin-api-omega.vercel.app/api/${slug}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "World",
          firstName: "Test",
          email: "testme@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          verified: true,
        }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [slug],
      });
    },
  });

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate();
    setOpenProps(false);
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
