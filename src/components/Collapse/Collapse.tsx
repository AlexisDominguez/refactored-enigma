import { useState, FC, ReactNode } from "react";
import Button from "../Inputs/Button";
import { CollapseContainer, CollapseTitleContainer } from "./CollapseStyles";

export interface ICollapseProps {
  collapseTitle: string;
  children: ReactNode;
}

const Collapse: FC<ICollapseProps> = ({ collapseTitle, children }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsCollapseOpen(!isCollapseOpen);
  };

  return (
    <CollapseContainer>
      <CollapseTitleContainer>
        {collapseTitle}
        <Button color="primary" onClick={handleClick}>
          {isCollapseOpen ? "Close" : "Open"}
        </Button>
      </CollapseTitleContainer>
      {isCollapseOpen && <div>{children}</div>}
    </CollapseContainer>
  );
};

export default Collapse;
