import styled from "styled-components";
import theme from "../../theme";

export const ListItemContainer = styled.li`
  padding: ${theme.spacing[1]};

  &:hover {
    background-color: ${theme.backgroundColors.gray};
    cursor: pointer;
  }
`;
