import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useRef,
} from "react";
import {
  useEdgesState,
  useNodesState,
  // Node,
  // NodeMouseHandler,
  addEdge,
  OnConnect,
  // Position,
} from "reactflow";
import { initialNodes } from "../../nodes";
import { initialEdges } from "../../edges";

const useValueReactFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<{
    label: string;
    toolbarVisible?: boolean;
  }>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const edgeUpdateSuccessful = useRef(true);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const refreshNodes = () => {
    setNodes((prev) => [...prev]);
  };

  // const addNode = (node: Node) => {
  //   setNodes((prev) => [...prev, node]);
  // };
  // console.log(window.event);

  const addNode = (n) => {
    setNodes((prev) => [
      ...prev,
      n,
      // {
      //   id: Math.random() + "",
      //   type: "transform",
      //   position: { x: 0, y: 0 },
      //   data: { label: "transform" },
      // },
    ]);
  };

  const delNode = (id: string) => {
    setNodes((prev) => [...prev.filter((n) => n.id !== id)]);
  };

  return {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    edgeUpdateSuccessful,
    onConnect,
    refreshNodes,
    addNode,
    delNode,
  };
};

export const ReactFlowContext = createContext(
  {} as ReturnType<typeof useValueReactFlow>
);

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ReactFlowContext.Provider value={useValueReactFlow()}>
        {children}
      </ReactFlowContext.Provider>
    </>
  );
};

export default Provider;

// zustand
