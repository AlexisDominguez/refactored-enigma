import { FC } from "react";
import Button from "../../components/Inputs/Button";

const NewNoteActionsModule: FC = () => {
  return (
    <div>
      <Button color="success">Save</Button>
      <Button color="danger">Delete</Button>
    </div>
  );
};

export default NewNoteActionsModule;
