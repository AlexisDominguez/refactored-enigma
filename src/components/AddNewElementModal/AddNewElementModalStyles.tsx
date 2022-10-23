import styled from "styled-components";

export const StyledModalContent = styled.div`
  width: 50%;
  min-width: 400px;
  height: 50%;
  min-height: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75) !important;
`;

export const StyledModalTitle = styled.h1`
  text-align: center;
`;

export const StyledActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonCustomStyles = {
  width: "200px",
};
