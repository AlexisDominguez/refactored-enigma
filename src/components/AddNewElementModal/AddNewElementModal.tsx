import { ChangeEvent, FC, useState } from "react";
import ReactModal from "react-modal";
import Button from "../Inputs/Button";
import TextInput from "../Inputs/TextInput";

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
    >
      <h1>{modalTitle}</h1>
      <TextInput value={newElementName} onChange={handleNewElementName} />
      <Button
        color="success"
        onClick={() => acceptButtonAction(newElementName)}
      >
        {acceptButtonText}
      </Button>
      <Button color="danger" onClick={onRequestClose}>
        Cancel
      </Button>
    </ReactModal>
  );
};

export default Modal;
