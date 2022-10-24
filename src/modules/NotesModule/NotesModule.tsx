import { FC } from "react";
import Collapse from "../../components/Collapse";
import { IContextMenuOption } from "../../components/ContextMenu";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

const MOCK_NOTES_LIST = ["Note 1", "Note 2", "Note 3"];

const NotesModule: FC = () => {
  const listItemActionHandler = (option: IContextMenuOption): void => {
    console.log(option);
  };

  return (
    <Collapse collapseTitle="Notes">
      <List>
        {MOCK_NOTES_LIST.map((note) => (
          <ListItem
            key={note}
            elementId={1}
            elementType="note"
            text={note}
            onClickHandler={listItemActionHandler}
          />
        ))}
      </List>
    </Collapse>
  );
};

export default NotesModule;
