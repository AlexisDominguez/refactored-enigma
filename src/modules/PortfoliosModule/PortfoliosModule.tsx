import { FC, useState } from "react";
import { useQuery } from "react-query";
import Collapse from "../../components/Collapse";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import { getPorfolios } from "../../services/portfolios";
import { IPortfolio } from "../../models/portfolio";
import Modal from "../../components/AddNewElementModal";
import toast from "../../utils/toast";

const PortfoliosModule: FC = () => {
  const [isPortfoliosModalOpen, setIsPortfoliosModalOpen] =
    useState<boolean>(false);

  const { data, isFetching } = useQuery("portfolios", getPorfolios);

  const handlePortfolioModalOpen = (): void => {
    setIsPortfoliosModalOpen(!isPortfoliosModalOpen);
  };

  // TODO: Create new portfolio endpoint integration
  const acceptButtonAction = (newElementName: string): void => {
    toast("success", newElementName);
  };

  return (
    <Collapse
      collapseTitle="Portfolios"
      openByDefault={true}
      isFetching={isFetching}
      addNewOnClick={handlePortfolioModalOpen}
    >
      <List>
        {data?.data.map((portfolio: IPortfolio) => (
          <ListItem key={portfolio.id} text={portfolio.name} />
        ))}
      </List>
      <Modal
        isOpen={isPortfoliosModalOpen}
        onRequestClose={handlePortfolioModalOpen}
        acceptButtonAction={acceptButtonAction}
        modalTitle="Create new Portfolio"
        acceptButtonText="Create New Portfolio"
      />
    </Collapse>
  );
};

export default PortfoliosModule;
