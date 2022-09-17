import { FC } from "react";
import SidePanel from "../SidePanel";
import MainPanel from "../MainPanel";
import {
  MainLayoutWrapper,
  MainLayoutSidePanelWrapper,
  MainLayoutMainPanelWrapper,
} from "./MainLayoutStyles";

const MainLayout: FC = () => {
  return (
    <MainLayoutWrapper>
      <MainLayoutSidePanelWrapper>
        <SidePanel />
      </MainLayoutSidePanelWrapper>
      <MainLayoutMainPanelWrapper>
        <MainPanel />
      </MainLayoutMainPanelWrapper>
    </MainLayoutWrapper>
  );
};

export default MainLayout;
