import { FC } from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Collapse from "../../components/Collapse";

const MOCK_NOTEBOOKS_LIST = ["Notebook 1", "Notebook 2", "Notebook 3"];

const NotebooksModule: FC = () => {
  return (
    <Collapse collapseTitle="Notebooks">
      <List>
        {MOCK_NOTEBOOKS_LIST.map((notebook) => (
          <ListItem key={notebook} text={notebook} />
        ))}
      </List>
    </Collapse>
  );
};

export default NotebooksModule;
