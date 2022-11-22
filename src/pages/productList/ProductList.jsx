import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ProductListSC } from "./ProductListSC";
import { productData } from "../../dummyData.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { DARK_MODE_MODULE_BACKGROUND_COLOR } from "../../shared/sharedStyles";

export default function ProductList() {

  const [data, setData] = useState(productData);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 130},
    {
      field: "productName", 
      headerName: "Product",
      renderCell: (params) => {
        return (
          <div className="product-list">
            <img className="product-list-image" src={params.row.image} alt={params.row.name} />
            {params.row.name}
          </div>
        );
      }
    },
    { field: "stock", headerName: "Stock", width: 200},
    { field: "status", headerName: "Status", width: 130, renderCell: (params) => {
      return (
        <p className={`product-status ${params.row.status}`}>{params.row.status}</p>
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
      )
    }
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="product-list-edit-container">
          <Link to={`/product/${params.row.id}`}>
            <button className="product-list-edit">Edit</button>
          </Link>
          <DeleteOutlineIcon className="product-list-delete" onClick={() => handleDelete(params.row.id)} />
        </div>
      );
    }
  }


  ]

  return (
    <ProductListSC> 
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        style={{ borderRadius: 15, backgroundColor: DARK_MODE_MODULE_BACKGROUND_COLOR, color: "white" }} 
      />
    </ProductListSC>
  )
}

