import styled from "styled-components";
import { 
  DARK_MODE_MODULE_BOX_SHADOW, 
  DARK_MODE_MODULE_BACKGROUND_COLOR, 
  DARK_MODE_FONT_COLOR, 
  MODULE_BORDER_RADIUS,
  MODULE_BACKDROP_BLUR,
  MODULE_TITLE_FONT_SIZE,
  MODULE_TITLE_FONT_WEIGHT,
  MODULE_PADDING,
  MODULE_USER_IMAGE_WIDTH,
  MODULE_USER_IMAGE_HEIGHT,
  MODULE_USER_IMAGE_BORDER_RADIUS,
  MODULE_USER_IMAGE_OBJECT_FIT,

  MODULE_BUTTON_PADDING,
  MODULE_BUTTON_BORDER,
  MODULE_BUTTON_BORDER_RADIUS
} from "../../shared/sharedStyles";

const WidgetLargeSC = styled.div`
  flex: 2;
  padding: ${MODULE_PADDING};
  border-radius: ${MODULE_BORDER_RADIUS};
  box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  -webkit-box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  background-color: ${DARK_MODE_MODULE_BACKGROUND_COLOR};
  backdrop-filter: ${MODULE_BACKDROP_BLUR};
  -webkit-backdrop-filter: ${MODULE_BACKDROP_BLUR};
  color: ${DARK_MODE_FONT_COLOR};

  .widget-large-title {
    font-size: ${MODULE_TITLE_FONT_SIZE};
    font-weight: ${MODULE_TITLE_FONT_WEIGHT};
  }

  .widget-large-table {
    width: 100%;
    border-spacing: 20px;
  }

  .widget-large-tr {
    text-align: left;
  }

  .widget-large-user {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  .widget-large-image {
    width: ${MODULE_USER_IMAGE_WIDTH};
    height: ${MODULE_USER_IMAGE_HEIGHT};
    border-radius: ${MODULE_USER_IMAGE_BORDER_RADIUS};
    object-fit: ${MODULE_USER_IMAGE_OBJECT_FIT};
    margin-right: 10px;
  }

  .widget-large-date, .widget-large-amount {
    font-weight: 300;
  }

  .widget-large-button {
    padding: ${MODULE_BUTTON_PADDING};
    border: ${MODULE_BUTTON_BORDER};
    border-radius: ${MODULE_BUTTON_BORDER_RADIUS};
  }
  .widget-large-button.Approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  .widget-large-button.Declined {
    background-color: #fbd3d0;
    color: #d95087;
  }
  .widget-large-button.Pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;

export { WidgetLargeSC };