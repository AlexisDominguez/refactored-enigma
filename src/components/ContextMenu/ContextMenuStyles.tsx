import styled from "styled-components";
import theme from "../../theme";

export const ContextMenuContainer = styled.div<{
  visible: boolean;
  left: number;
  top: number;
}>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  position: absolute;
  background-color: ${theme.backgroundColors.light};
  box-shadow: ${theme.shadows.contextMenuShadow};
`;

export const ContextMenuOptions = styled.div`
  padding: ${theme.spacing[2]};

  &:hover {
    background-color: ${theme.backgroundColors.gray};
    cursor: pointer;
  }
`;
