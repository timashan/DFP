import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <div className="react-flow__node-default">
      <div style={{ padding: "0 0" }}>{data.label}</div>

      {/* <Handle type="target" position={Position.Left} /> */}
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;
