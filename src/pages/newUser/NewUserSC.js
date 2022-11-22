import styled from "styled-components";
import { DARK_MODE_FONT_COLOR } from "../../shared/sharedStyles";

const NewUserSC = styled.div`
  flex: 4;
  margin: 20px 20px 20px 195px;
  padding: 20px;
  height: 100vh;
  color: white;

  .new-user-form {
    display: flex;
    flex-wrap: wrap;
  }
  
  .new-user-item {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px 20px 0 0;
  }
  
  .new-user-item > label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${DARK_MODE_FONT_COLOR};
  }

  .new-user-item > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .new-user-gender > input {
    margin-top: 15px;

  }

  .new-user-gender > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }

  .new-user-select {
    height: 40px;
    border-radius: 5px;
  }

  .new-user-button {
    width: 200px;
    border: none;
    background-color: royalblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
`
export { NewUserSC };