import { FC } from "react";
import { SidePanelWrapper } from "./SidePanelStyles";
import PortfoliosModule from "../../modules/PortfoliosModule";
import NotebooksModule from "../../modules/NotebooksModule";
import NotesModule from "../../modules/NotesModule";

const SidePanel: FC = () => {
  return (
    <SidePanelWrapper>
      <PortfoliosModule />
      <NotebooksModule />
      <NotesModule />
    </SidePanelWrapper>
  );
};

export default SidePanel;
