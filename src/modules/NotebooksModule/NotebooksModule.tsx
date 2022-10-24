import { FC } from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Collapse from "../../components/Collapse";
import { IContextMenuOption } from "../../components/ContextMenu";

const MOCK_NOTEBOOKS_LIST = ["Notebook 1", "Notebook 2", "Notebook 3"];

const NotebooksModule: FC = () => {
  const listItemActionHandler = (option: IContextMenuOption): void => {
    console.log(option);
  };

  return (
    <Collapse collapseTitle="Notebooks">
      <List>
        {MOCK_NOTEBOOKS_LIST.map((notebook) => (
          <ListItem
            key={notebook}
            elementId={1}
            text={notebook}
            elementType="notebook"
            onClickHandler={listItemActionHandler}
          />
        ))}
      </List>
    </Collapse>
  );
};

export default NotebooksModule;
