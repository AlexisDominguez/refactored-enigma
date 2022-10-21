import { FC } from "react";
import { useQuery } from "react-query";
import Collapse from "../../components/Collapse";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import { getPorfolios } from "../../services/portfolios";
import { IPortfolio } from "../../models/portfolio";

const PortfoliosModule: FC = () => {
  const { data, isFetching } = useQuery("portfolios", getPorfolios);

  return (
    <Collapse
      collapseTitle="Portfolios"
      openByDefault={true}
      isFetching={isFetching}
    >
      <List>
        {data?.data.map((portfolio: IPortfolio) => (
          <ListItem key={portfolio.id} text={portfolio.name} />
        ))}
      </List>
    </Collapse>
  );
};

export default PortfoliosModule;
