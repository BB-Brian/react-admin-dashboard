import styled from "styled-components";

const UserListSC = styled.div`
  flex: 4;
  margin: 20px 20px 20px 195px;
  height: 100vh;

  .MuiCheckbox-root > .MuiSvgIcon-root, 
  .MuiToolbar-root > .MuiTablePagination-displayedRows,
  .MuiDataGrid-iconButtonContainer > button  {
    color: #c3c3c3;
  }

  .MuiTablePagination-actions > button {
    color: white;
  }

  a {

  }
  .user-list { 
    display: flex;
    align-items: center;
    height: 370px; 
    width: 100%;
  }

  .user-list-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .user-list-edit-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .user-list-edit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: gray;
    color: white;
    cursor: pointer;
  }

  .user-list-delete {
    color: red;
    cursor: pointer;
  }

  .user-status {
    color: green;
  }

  .user-status.inactive {
    color: gray;
  }
  
  .user-status.disabled {
    color: red;
  }
`

export { UserListSC };