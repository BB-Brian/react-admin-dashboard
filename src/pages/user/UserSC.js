import styled from "styled-components";
import {
  DARK_MODE_FONT_COLOR,
  DARK_MODE_MODULE_BACKGROUND_COLOR,
  DARK_MODE_MODULE_BOX_SHADOW,
  MODULE_BACKDROP_BLUR,
  MODULE_BORDER_RADIUS,
  MODULE_TITLE_FONT_SIZE,
  MODULE_TITLE_FONT_WEIGHT,
  MODULE_BUTTON_PADDING,
  MODULE_BUTTON_BORDER,
  MODULE_BUTTON_BORDER_RADIUS
} from "../../shared/sharedStyles";

const UserSC = styled.div`
 flex: 4;
 margin: 20px 20px 20px 195px;
 padding: 20px;
 height: 100vh;
 color: white;

 .user-title-container {
   display: flex;
   align-items: center;
   justify-content: space-between;
 }

 .user-add-button {
   width: 80px;
   border: none;
   padding: 5px;
   background-color: teal;
   border-radius: 5px;
   cursor: pointer;
   color: white;
   font-size: 16px;
 }

 .user-container {
   display: flex;
 }

 .user-show, .user-update {
   flex: 1;
   padding: 20px;
   margin-top: 20px;
   border-radius: ${MODULE_BORDER_RADIUS};
   box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
   -webkit-box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
   background-color: ${DARK_MODE_MODULE_BACKGROUND_COLOR};
   backdrop-filter: ${MODULE_BACKDROP_BLUR};
   -webkit-backdrop-filter: ${MODULE_BACKDROP_BLUR};
   color: ${DARK_MODE_FONT_COLOR};
 }

 .user-update {
   flex: 2;
   margin-left: 20px;
 }

 .user-update-title {
  font-size: 24px;
  font-weight: 600;
 }

 .user-show-top {
  display: flex;
  align-items: center;
 }

 .user-show-img {
   width: 40px;
   height: 40px;
   border-radius: 50%;
   object-fit: cover;
 }

 .user-show-top-title {
   display: flex;
   flex-direction: column;
   margin-left: 20px;
 }

 .user-show-username, .user-show-title {
   font-weight: 600;
 }

 .user-show-user-title {
  font-weight: 300;
 }

 .user-show-bottom {
   margin-top: 20px;
 }

 .user-show-title {
   font-size: 14px;
   color: darkgray;
 }

 .user-show-info {
   display: flex;
   align-items: center;
   margin: 20px 0px;
   color: ${DARK_MODE_FONT_COLOR};
 }

 .user-show-icon {
  font-size: 26px !important;
 }

 .user-show-info-title {
   margin-left: 10px;
 }

 .user-update-form {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
 }

 .user-update-item {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
 }

 .user-update-item>label {
  font-size: 14px;
 }

 .user-update-input {
   border: none;
   width: 250px;
   height: 30px;
   border-bottom: 1px solid gray;
   background-color: transparent;
 }

 .user-update-right {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
 }

 .user-update-upload {
   display: flex;
   align-items: center;
 }

 .user-update-img {
   height: 100px;
   border-radius: 10px;
   object-fit: cover;
   margin-right: 20px;
   width: 100px;
 }

 .user-update-icon {
   cursor: pointer;
 }

 .user-update-button {
   border-radius: 5px;
   border: none;
   padding: 5px;
   cursor: pointer;
   background-color: royalblue;
   color: white;
   font-weight: 600;
 }

 .user-update-button:hover {
  background-color: darkblue;
 }
`

export { UserSC };