import styled from "styled-components";
import { 
  DARK_MODE_FONT_COLOR, 
  DARK_MODE_MODULE_BACKGROUND_COLOR, 
  DARK_MODE_MODULE_BOX_SHADOW, 
  MODULE_BACKDROP_BLUR,
  MODULE_BORDER_RADIUS,
  MODULE_TITLE_FONT_SIZE,
  MODULE_TITLE_FONT_WEIGHT
} from "../../shared/sharedStyles";

const ChartSC = styled.div`
  margin: 10px;
  padding: 20px;
  box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  -webkit-box-shadow: ${DARK_MODE_MODULE_BOX_SHADOW};
  border-radius: ${MODULE_BORDER_RADIUS};
  background-color: ${DARK_MODE_MODULE_BACKGROUND_COLOR};
  backdrop-filter: ${MODULE_BACKDROP_BLUR};
  -webkit-backdrop-filter: ${MODULE_BACKDROP_BLUR};
  color: ${DARK_MODE_FONT_COLOR};

.chart-title {
  font-size: ${MODULE_TITLE_FONT_SIZE};
  font-weight: ${MODULE_TITLE_FONT_WEIGHT};
  margin-bottom: 20px;
}
`;

export { ChartSC };