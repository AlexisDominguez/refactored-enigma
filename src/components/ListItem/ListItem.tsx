import { ComponentPropsWithoutRef, FC } from "react";
import { ListItemContainer } from "./ListItemStyles";

export interface IListItemProps extends ComponentPropsWithoutRef<"li"> {
  text: string;
}

const ListItem: FC<IListItemProps> = ({ text, ...props }) => {
  return <ListItemContainer {...props}>{text}</ListItemContainer>;
};

export default ListItem;
