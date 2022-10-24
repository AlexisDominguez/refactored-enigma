import { FC, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Collapse from "../../components/Collapse";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import { getPorfolios, createPorfolio } from "../../services/portfolios";
import { IPortfolio } from "../../models/portfolio";
import Modal from "../../components/AddNewElementModal";
import toast from "../../utils/toast";
import { IContextMenuOption } from "../../components/ContextMenu";

const PortfoliosModule: FC = () => {
  const [isPortfoliosModalOpen, setIsPortfoliosModalOpen] =
    useState<boolean>(false);

  const { data, isFetching } = useQuery("portfolios", getPorfolios);
  const queryClient = useQueryClient();

  const mutation = useMutation(createPorfolio, {
    onSuccess: () => {
      void queryClient.invalidateQueries("portfolios");
      toast("success", "Portfolio created successfully!");
    },
    onError: () => {
      toast("error", "An error has occurred while creating new portfolio...");
    },
  });

  const handlePortfolioModalOpen = (): void => {
    setIsPortfoliosModalOpen(!isPortfoliosModalOpen);
  };

  const acceptButtonAction = (newElementName: string): void => {
    mutation.mutate(newElementName);
    setIsPortfoliosModalOpen(false);
  };

  const listItemActionsHandler = (option: IContextMenuOption): void => {
    console.log(option);
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
          <ListItem
            key={portfolio.id}
            elementId={portfolio.id}
            elementType="portfolio"
            text={portfolio.name}
            onClickHandler={listItemActionsHandler}
          />
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
