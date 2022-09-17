import styled from "styled-components";
import theme, { TColorsOptions } from "../../../theme";
import { IButtonProps } from "./Button";

export const StyledButton = styled.button<{ color?: TColorsOptions }>`
  background-color: ${({ color }) =>
    color !== undefined
      ? theme.colors[color as keyof IButtonProps["color"]]
      : "transparent"};
  border: none;
  padding: ${theme.spacing[1]};
  color: ${theme.fontColors.white};
  margin: ${theme.spacing[1]};
  &:hover {
    cursor: pointer;
  }
`;
