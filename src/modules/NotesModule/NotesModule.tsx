import { FC } from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

const MOCK_NOTES_LIST = ["Note 1", "Note 2", "Note 3"];

const NotesModule: FC = () => {
  return (
    <div>
      <List listTitle="Notes">
        {MOCK_NOTES_LIST.map((note) => (
          <ListItem key={note} text={note} />
        ))}
      </List>
    </div>
  );
};

export default NotesModule;
