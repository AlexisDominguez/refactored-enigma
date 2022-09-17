import { FC } from "react";
import Button from "../../components/Inputs/Button";

const NewNoteActionsModule: FC = () => {
  return (
    <div>
      <Button color="primary">Save</Button>
      <Button color="secondary">Delete</Button>
    </div>
  );
};

export default NewNoteActionsModule;
