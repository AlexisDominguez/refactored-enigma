import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { TColorsOptions } from "../../../theme";
import { StyledButton } from "./ButtonStyles";

export interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  color?: TColorsOptions;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
