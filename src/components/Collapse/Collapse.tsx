import { useState, FC, ReactNode } from "react";
import { PuffLoader } from "react-spinners";
import Button from "../Inputs/Button";
import {
  CollapseContainer,
  CollapseTitleContainer,
  CollapseLoaderContainer,
} from "./CollapseStyles";

export interface ICollapseProps {
  collapseTitle: string;
  openByDefault?: boolean;
  isFetching?: boolean;
  children: ReactNode;
}

const Collapse: FC<ICollapseProps> = ({
  collapseTitle,
  openByDefault,
  children,
  isFetching,
}) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(
    Boolean(openByDefault)
  );

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
      {isCollapseOpen && (
        <div>
          {isFetching === true ? (
            <CollapseLoaderContainer>
              <PuffLoader
                loading={isFetching}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </CollapseLoaderContainer>
          ) : (
            children
          )}
        </div>
      )}
    </CollapseContainer>
  );
};

export default Collapse;
