import { FC } from "react";
import SidePanel from "../SidePanel";
import MainPanel from "../MainPanel";
import {
  MainLayoutWrapper,
  SidePanelWrapper,
  MainPanelWrapper,
} from "./MainLayoutStyles";

const MainLayout: FC = () => {
  return (
    <MainLayoutWrapper>
      <SidePanelWrapper>
        <SidePanel />
      </SidePanelWrapper>
      <MainPanelWrapper>
        <MainPanel />
      </MainPanelWrapper>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
