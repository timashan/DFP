import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";
import styles from "./index.module.scss";

export type PositionLoggerNodeData = {
  label?: string;
  toolbarVisible: boolean;
};

import NodeToolbar from "../toolbar";
import { FC } from "react";

export const PositionLoggerNode: FC<NodeProps<PositionLoggerNodeData>> = (
  props
) => {
  const { id, data } = props;

  return (
    <div className={`${styles.container}`}>
      <NodeToolbar {...props} />

      {/* react-flow__node-default */}
      <div className={`node`}>
        {data.label && <div>{data.label}</div>}

        <div>
          <select>
            <option value="rm_null">Remove nulls</option>
            <option value="rm_dup">Remove duplicates</option>
          </select>
        </div>

        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </div>
  );
};
