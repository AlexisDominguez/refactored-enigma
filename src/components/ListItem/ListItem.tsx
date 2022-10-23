import { ComponentPropsWithoutRef, FC } from "react";
import { ListItemContainer } from "./ListItemStyles";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Button from "../Inputs/Button";

export interface IListItemProps extends ComponentPropsWithoutRef<"li"> {
  text: string;
}

const ListItem: FC<IListItemProps> = ({ text, ...props }) => {
  return (
    <ListItemContainer {...props}>
      {text}
      <Button noSpacing color="primary">
        <MdOutlineMoreHoriz />
      </Button>
    </ListItemContainer>
  );
};

export default ListItem;
