import styled from "styled-components";
import { 
  DARK_MODE_FONT_COLOR, 
  DARK_MODE_MODULE_BACKGROUND_COLOR, 
  DARK_MODE_MODULE_BOX_SHADOW, 
  MODULE_BACKDROP_BLUR,
  MODULE_BORDER_RADIUS,
  MODULE_SUB_TITLE_COLOR,
  MODULE_SUB_TITLE_FONT_SIZE,
  MODULE_TITLE_FONT_SIZE,
  MODULE_TITLE_FONT_WEIGHT
} from "../../shared/sharedStyles";

const FeaturedInfoSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: ${DARK_MODE_FONT_COLOR};

.featured-item {
  flex: 1;
  margin: 10px;
  padding: 20px;
  border-radius: ${MODULE_BORDER_RADIUS};
  cursor: pointer;
  -webkit-box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  background-color: ${DARK_MODE_MODULE_BACKGROUND_COLOR};
  backdrop-filter: ${MODULE_BACKDROP_BLUR};
  -webkit-backdrop-filter: ${MODULE_BACKDROP_BLUR};
}

.featured-title {
  font-size: ${MODULE_TITLE_FONT_SIZE};
  font-weight: ${MODULE_TITLE_FONT_WEIGHT};
}

.featured-money-container {
  margin: 10px 0px;
  display: flex;
  align-items: center;
}

.featured-money {
  font-size: 30px;
  font-weight: 600; 
}

.featured-money-rate {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.featured-icon {
  font-size: 22px;
  margin-left: 5px;
  color: green;
}
.featured-icon.negative {
  color: red;
}

.featured-sub {
  font-size: ${MODULE_SUB_TITLE_FONT_SIZE};
  color: ${MODULE_SUB_TITLE_COLOR};
}
`;

export { FeaturedInfoSC };