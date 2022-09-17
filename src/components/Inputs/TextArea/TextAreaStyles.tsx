import styled from "styled-components";
import theme from "../../../theme/theme";

export const StyledTextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: ${theme.spacing[1]};
  resize: none;
  height: 100%;
  &:focus {
    outline: none;
  }
`;
