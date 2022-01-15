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

const WidgetSmallSC = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: ${MODULE_BORDER_RADIUS};
  box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  -webkit-box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  background-color: ${DARK_MODE_MODULE_BACKGROUND_COLOR};
  backdrop-filter: ${MODULE_BACKDROP_BLUR};
  -webkit-backdrop-filter: ${MODULE_BACKDROP_BLUR};
  color: ${DARK_MODE_FONT_COLOR};
  
  .widget-small-title {
    font-size: ${MODULE_TITLE_FONT_SIZE};
    font-weight: ${MODULE_TITLE_FONT_WEIGHT};
  }

  .widget-small-image {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
    object-fit: cover;
  }

  .widget-small-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
 
  .widget-small-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
    width: 100%;
  }

  .widget-small-user-container {
    display: flex;
    width: calc(100% - 70px);
    justify-content: space-between;
    align-items: center;
  }

  .widget-small-user {
    display: flex;
    flex-direction: column;
  }

  .widget-small-username {
    font-weight: 600;
  }

  .widget-small-user-title {
    font-weight: 300;
    font-size: 14px;
  }

  .widget-small-button {
    display: flex;
    align-items: center;
    border: ${MODULE_BUTTON_BORDER};
    max-height: 30px;
    border-radius: ${MODULE_BUTTON_BORDER_RADIUS};
    padding: ${MODULE_BUTTON_PADDING};
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
  } 

  .widget-small-icon { 
    font-size: 16px !important;
    margin-right: 5px;
  }
`;

export { WidgetSmallSC };