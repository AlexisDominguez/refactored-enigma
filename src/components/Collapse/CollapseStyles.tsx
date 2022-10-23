import styled from "styled-components";
import theme from "../../theme";

export const CollapseContainer = styled.div``;

export const CollapseTitleContainer = styled.h1`
  border-bottom: 1px solid ${theme.borderColors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const CollapseButtonContainer = styled.div`
  display: flex;
`;

export const CollapseLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing[1]};
`;
