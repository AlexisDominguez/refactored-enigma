import { ComponentPropsWithoutRef, FC } from "react";
import { StyledTextInput } from "./TextInputStyles";

export interface ITextInputProps extends ComponentPropsWithoutRef<"input"> {}

const TextInput: FC<ITextInputProps> = ({ ...props }) => {
  return (
    <div>
      <StyledTextInput {...props} />
    </div>
  );
};

export default TextInput;
