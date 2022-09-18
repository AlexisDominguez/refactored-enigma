import { FC } from "react";
import Collapse from "../../components/Collapse";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

const MOCK_PORTFOLIOS_LIST = ["Portfolio 1", "Portfolio 2", "Portfolio 3"];

const PortfoliosModule: FC = () => {
  return (
    <Collapse collapseTitle="Portfolios">
      <List>
        {MOCK_PORTFOLIOS_LIST.map((portfolio) => (
          <ListItem key={portfolio} text={portfolio} />
        ))}
      </List>
    </Collapse>
  );
};

export default PortfoliosModule;
