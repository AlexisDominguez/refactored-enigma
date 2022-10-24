import { ComponentPropsWithoutRef, FC } from "react";
import { ListItemContainer } from "./ListItemStyles";
import ContextMenu, { IContextMenuOption } from "../ContextMenu";

export interface IListItemProps extends ComponentPropsWithoutRef<"li"> {
  text: string;
  elementId: number;
  elementType: string;
  onClickHandler: (option: IContextMenuOption) => void;
}

const ListItem: FC<IListItemProps> = ({
  text,
  elementId,
  elementType,
  onClickHandler,
  ...props
}) => {
  return (
    <ListItemContainer
      {...props}
      id={`${elementType}-custom-context-menu-${elementId}`}
    >
      {text}
      <ContextMenu
        targetId={`${elementType}-custom-context-menu-${elementId}`}
        options={[
          {
            optionName: "Delete",
            elementId,
            onClickHandler,
          },
          {
            optionName: "Update",
            elementId,
            onClickHandler,
          },
        ]}
      />
    </ListItemContainer>
  );
};

export default ListItem;
