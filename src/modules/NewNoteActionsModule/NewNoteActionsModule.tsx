import { FC } from "react";
import Button from "../../components/Inputs/Button";
import { ActionsButtonsContainer } from "./NewNoteActionsModuleStyles";

const NewNoteActionsModule: FC = () => {
  return (
    <ActionsButtonsContainer>
      <Button color="success">Save</Button>
      <Button color="danger">Delete</Button>
    </ActionsButtonsContainer>
  );
};

export default NewNoteActionsModule;
