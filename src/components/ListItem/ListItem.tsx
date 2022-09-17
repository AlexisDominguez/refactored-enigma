import { FC } from "react";

export interface IListItemProps {
  text: string;
}

const ListItem: FC<IListItemProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default ListItem;
