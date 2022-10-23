import { ChangeEvent, FC, useState } from "react";
import ReactModal from "react-modal";
import Button from "../Inputs/Button";
import TextInput from "../Inputs/TextInput";
import {
  StyledModalContent,
  StyledModalOverlay,
  StyledModalTitle,
  StyledActionButtonContainer,
  ButtonCustomStyles,
} from "./AddNewElementModalStyles";

interface IModal {
  acceptButtonText: string;
  isOpen: boolean;
  modalTitle: string;
  acceptButtonAction: (newElementName: string) => void;
  onRequestClose: () => void;
}

const Modal: FC<IModal> = ({
  acceptButtonText,
  isOpen,
  modalTitle,
  acceptButtonAction,
  onRequestClose,
}) => {
  const [newElementName, setNewElementName] = useState<string>("");

  const handleNewElementName = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewElementName(event.target.value);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentElement={(props, children) => (
        <StyledModalContent {...props}>{children}</StyledModalContent>
      )}
      overlayElement={(props, contentElement) => (
        <StyledModalOverlay {...props}>{contentElement}</StyledModalOverlay>
      )}
    >
      <StyledModalTitle>{modalTitle}</StyledModalTitle>
      <TextInput value={newElementName} onChange={handleNewElementName} />
      <StyledActionButtonContainer>
        <Button
          color="success"
          style={ButtonCustomStyles}
          onClick={() => acceptButtonAction(newElementName)}
        >
          {acceptButtonText}
        </Button>
        <Button
          color="danger"
          style={ButtonCustomStyles}
          onClick={onRequestClose}
        >
          Cancel
        </Button>
      </StyledActionButtonContainer>
    </ReactModal>
  );
};

export default Modal;
