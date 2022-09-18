import { FC, ReactNode } from "react";
import { StyledList } from "./ListStyles";
export interface IListProps {
  children: ReactNode;
  listTitle?: string;
}

const List: FC<IListProps> = ({ children, listTitle }) => {
  return (
    <div>
      {Boolean(listTitle) && <h1>{listTitle}</h1>}
      <StyledList>{children}</StyledList>
    </div>
  );
};

export default List;
