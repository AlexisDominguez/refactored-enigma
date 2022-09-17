import { FC, ReactNode } from "react";
import { TColorsOptions } from "../../../theme";
import { StyledButton } from "./ButtonStyles";

export interface IButtonProps {
  children: ReactNode;
  color?: TColorsOptions;
}

const Button: FC<IButtonProps> = ({ children, color }) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

export default Button;
