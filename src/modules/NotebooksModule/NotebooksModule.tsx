import { FC } from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

const MOCK_NOTEBOOKS_LIST = ["Notebook 1", "Notebook 2", "Notebook 3"];

const NotebooksModule: FC = () => {
  return (
    <div>
      <List listTitle="Notebooks">
        {MOCK_NOTEBOOKS_LIST.map((notebook) => (
          <ListItem key={notebook} text={notebook} />
        ))}
      </List>
    </div>
  );
};

export default NotebooksModule;
