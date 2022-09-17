import { FC } from "react";
import { MainPanelHeaderContainer } from "./MainPanelHeaderStyles";
import NewNoteActionsModule from "../../modules/NewNoteActionsModule";

const MainPanelHeader: FC = () => {
  return (
    <MainPanelHeaderContainer>
      <h1>Nota 1</h1>
      <NewNoteActionsModule />
    </MainPanelHeaderContainer>
  );
};

export default MainPanelHeader;
