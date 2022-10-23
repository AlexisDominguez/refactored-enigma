import styled from "styled-components";
import theme, { TColorsOptions } from "../../../theme";
import { IButtonProps } from "./Button";

export const StyledButton = styled.button<{
  color?: TColorsOptions;
  noSpacing?: boolean;
}>`
  display: flex;
  background-color: ${({ color }) =>
    color !== undefined
      ? theme.colors[color as keyof IButtonProps["color"]]
      : "transparent"};
  border: none;
  border-radius: 5px;
  box-shadow: ${theme.shadows.buttonShadow};
  padding: ${theme.spacing[1]};
  color: ${theme.fontColors.white};
  margin: ${theme.spacing[1]};

  &:hover {
    cursor: pointer;
  }
`;
