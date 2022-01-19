import { useState } from "react";
import { UserListSC } from "./UserListSC";
import { DataGrid } from "@mui/x-data-grid";
import { newMembersData } from "../../dummyData.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";

export default function UserList() {

  const [data, setData] = useState(newMembersData);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "username", headerName: "Username", renderCell: (params) => {
        return (
          <div className="user-list">
            <img className="user-list-image" src={params.row.image} alt={params.row.username} />
            {params.row.username}
          </div>
        );
      }
    },
    { field: "email", headerName: "Email", width: 220 },
    {
      field: "status", headerName: "Status", width: 130, renderCell: (params) => {
        return (
          <p className={`user-status ${params.row.status}`}>{params.row.status}</p>
        );
      }
    },
    {
      field: "transaction", headerName: "Transaction", width: 200, renderCell: (params) => {
        return (
          <p>
            {Number(params.row.transaction).toLocaleString(
              "us-US",
              { style: "currency", currency: "USD" }
            )}
          </p>
        );
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="user-list-edit-container">
            <Link to={`/user/${params.row.id}`}>
              <button className="user-list-edit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="user-list-delete" onClick={() => handleDelete(params.row.id)} />
          </div>
        );
      }
    }
  ];

  return (
    <UserListSC>
      <div className="user-list">
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          style={{ borderRadius: 15, backgroundColor: "white" }} />
      </div>
    </UserListSC>
  )
};
