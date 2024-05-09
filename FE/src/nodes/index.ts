import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import CustomNode from "./CustomNode";

export const initialNodes = [
  {
    id: "a",
    type: "origin",
    position: { x: 0, y: 0 },
    data: { label: "data src" },
  },
  {
    id: "b",
    type: "transform",
    position: { x: 250, y: 0 },
    data: { label: "transform" },
  },
  // { id: "c", position: { x: 300, y: 0 }, data: { label: "transform" } },
  {
    id: "d",
    type: "output",
    position: { x: 450, y: 0 },
    data: { label: "Merge" },
  },
] satisfies Node<{ label: string; toolbarVisible?: boolean }>[];

export const nodeTypes = {
  transform: PositionLoggerNode,
  origin: CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
