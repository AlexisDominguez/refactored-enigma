import { FC, ReactNode } from "react";

export interface IListProps {
  children: ReactNode;
  listTitle: string;
}

const List: FC<IListProps> = ({ children, listTitle }) => {
  return (
    <div>
      <h1>{listTitle}</h1>
      <ul>{children}</ul>
    </div>
  );
};

export default List;
