import styled from "styled-components";
import theme from "../../theme";

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing[2]};

  &:hover {
    background-color: ${theme.backgroundColors.gray};
    cursor: pointer;
  }
`;
