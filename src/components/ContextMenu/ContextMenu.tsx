import { useState, useEffect, useRef, useLayoutEffect, FC } from "react";
import { ContextMenuContainer, ContextMenuOptions } from "./ContextMenuStyles";

export interface IContextMenuOption {
  optionName: string;
  elementId: string | number;
  onClickHandler: (option: IContextMenuOption) => void;
}

export interface IContextMenuProps {
  targetId: string;
  options: IContextMenuOption[];
}

export interface IContextData {
  visible: boolean;
  posX: number;
  posY: number;
}

const MyCustomContextMenu: FC<IContextMenuProps> = ({ targetId, options }) => {
  const [contextData, setContextData] = useState<IContextData>({
    visible: false,
    posX: 0,
    posY: 0,
  });
  const contextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contextMenuEventHandler = (event: any): void => {
      const targetElement = document.getElementById(targetId);
      if (targetElement?.contains(event.target) === true) {
        event.preventDefault();
        setContextData({
          visible: true,
          posX: event.clientX,
          posY: event.clientY,
        });
      } else if (
        contextRef.current != null &&
        !contextRef.current.contains(event.target)
      ) {
        setContextData({ ...contextData, visible: false });
      }
    };

    const offClickHandler = (event: any): void => {
      if (
        contextRef.current != null &&
        !contextRef.current.contains(event.target)
      ) {
        setContextData({ ...contextData, visible: false });
      }
    };

    document.addEventListener("contextmenu", contextMenuEventHandler);
    document.addEventListener("click", offClickHandler);
    return () => {
      document.removeEventListener("contextmenu", contextMenuEventHandler);
      document.removeEventListener("click", offClickHandler);
    };
  }, [contextData, targetId]);

  useLayoutEffect(() => {
    if (contextRef.current?.offsetWidth == null) return;

    if (
      contextData.posX + contextRef.current?.offsetWidth >
      window.innerWidth
    ) {
      setContextData({
        ...contextData,
        posX: contextData.posX - contextRef.current?.offsetWidth,
      });
    }
    if (
      contextData.posY + contextRef.current?.offsetHeight >
      window.innerHeight
    ) {
      setContextData({
        ...contextData,
        posY: contextData.posY - contextRef.current?.offsetHeight,
      });
    }
  }, [contextData]);

  return (
    <ContextMenuContainer
      ref={contextRef}
      visible={contextData.visible}
      left={contextData.posX}
      top={contextData.posY}
    >
      {options.map((option) => (
        <ContextMenuOptions
          key={`${option.elementId}-${option.optionName}`}
          onClick={() => option.onClickHandler(option)}
        >
          {option.optionName}
        </ContextMenuOptions>
      ))}
    </ContextMenuContainer>
  );
};

export default MyCustomContextMenu;
