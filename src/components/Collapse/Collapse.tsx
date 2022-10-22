import { useState, FC, ReactNode } from "react";
import { PuffLoader } from "react-spinners";
import Button from "../Inputs/Button";
import { MdOutlineAddCircle, MdExpandMore, MdExpandLess } from "react-icons/md";
import {
  CollapseContainer,
  CollapseTitleContainer,
  CollapseLoaderContainer,
} from "./CollapseStyles";

export interface ICollapseProps {
  collapseTitle: string;
  openByDefault?: boolean;
  isFetching?: boolean;
  addNewOnClick?: () => void;
  children: ReactNode;
}

const Collapse: FC<ICollapseProps> = ({
  collapseTitle,
  openByDefault,
  children,
  isFetching,
  addNewOnClick,
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
        <div>
          <Button color="primary" onClick={addNewOnClick}>
            <MdOutlineAddCircle />
          </Button>
          <Button color="primary" onClick={handleClick}>
            {isCollapseOpen ? <MdExpandLess /> : <MdExpandMore />}
          </Button>
        </div>
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
