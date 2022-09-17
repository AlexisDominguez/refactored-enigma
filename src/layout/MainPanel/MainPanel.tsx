import { FC } from "react";
import MainPanelHeader from "../MainPanelHeader";
import NewNoteModule from "../../modules/NewNoteModule";
import { MainPanelContainer } from "./MainPanelStyles";

const MainPanel: FC = () => {
  return (
    <MainPanelContainer>
      <MainPanelHeader />
      <NewNoteModule />
    </MainPanelContainer>
  );
};

export default MainPanel;
