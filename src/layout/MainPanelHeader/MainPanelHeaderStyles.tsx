import styled from "styled-components";
import theme from "../../theme";

export const MainPanelHeaderContainer = styled.header`
  height: 70px;
  padding: ${theme.spacing[1]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.backgroundColors.secondary};
`;
