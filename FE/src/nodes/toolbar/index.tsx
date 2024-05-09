import { NodeToolbar as NTB, NodeProps, Position } from "reactflow";

import { FC, useContext } from "react";
import { ReactFlowContext } from "../../components/provider";
import { MdDelete } from "react-icons/md";
import { FaCopy, FaExpandArrowsAlt } from "react-icons/fa";
import { FaMinimize } from "react-icons/fa6";

import styles from "./index.module.scss";
import Btn, { NodeToolBarBtn } from "../../components/btn";
import { PositionLoggerNodeData } from "../PositionLoggerNode";

interface Props extends NodeProps<PositionLoggerNodeData> {
  // data: { toolbarVisible: boolean };
  // id: string;
}

const NodeToolbar: FC<Props> = ({ id, data, type, xPos, yPos }) => {
  const { delNode, addNode } = useContext(ReactFlowContext);

  return (
    <>
      <NTB
        isVisible={data.toolbarVisible}
        position={Position.Top}
        className={styles.container}
      >
        <NodeToolBarBtn
          onClick={() => {
            delNode(id);
          }}
        >
          <MdDelete />
        </NodeToolBarBtn>

        <NodeToolBarBtn
          onClick={() => {
            addNode({
              id: Math.random() + "",
              type,
              position: { x: xPos + 5, y: yPos + 5 },
              data: { ...data },
            });
          }}
        >
          <FaCopy />
        </NodeToolBarBtn>
        <NodeToolBarBtn>
          <FaExpandArrowsAlt />
        </NodeToolBarBtn>
        <NodeToolBarBtn>
          <FaMinimize />
        </NodeToolBarBtn>
      </NTB>
    </>
  );
};

export default NodeToolbar;
