import { FC, useContext } from "react";
import styles from "./index.module.scss";
import { ToolBarBtn } from "../btn";
import { ReactFlowContext } from "../provider";

interface Props {
  // addNode: () => void;
}

const ToolBar: FC<Props> = () => {
  const { addNode } = useContext(ReactFlowContext);

  return (
    <div className={styles.container}>
      <ToolBarBtn
        onClick={() => {
          addNode({
            id: Math.random() + "",
            type: "transform",
            position: { x: 0, y: 0 },
            data: { label: "transform" },
          });
        }}
      >
        + Node
      </ToolBarBtn>
    </div>
  );
};

export default ToolBar;
