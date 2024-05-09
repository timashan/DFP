import type { OnConnect } from "reactflow";

import { useCallback, useRef } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  Panel,
  ControlButton,
  updateEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import { nodeTypes } from "./nodes";
import { edgeTypes } from "./edges";
import ToolBar from "./components/toolbar";

import { useContext } from "react";
import { ReactFlowContext } from "./components/provider";

export default function App() {
  const {
    nodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    edgeUpdateSuccessful,
    onConnect,
    refreshNodes,
  } = useContext(ReactFlowContext);

  const onNodeMouseEnter = (e, n) => {
    nodes.forEach((node) => (node.data.toolbarVisible = false));
    n.data.toolbarVisible = true;
    refreshNodes();
  };

  const onNodeMouseLeave = (e, n) => {
    n.data.toolbarVisible = false;
    refreshNodes();
  };

  //Edges
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === "1") {
  //         // it's important that you create a new object here
  //         // in order to notify react flow about the change
  //         // node.style = { ...node.style, backgroundColor: nodeBg };
  //       }

  //       return node;
  //     })
  //   );
  // }, [setNodes]);

  return (
    <>
      <ToolBar />
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodeMouseEnter={onNodeMouseEnter}
        // onNodeMouseMove={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        snapToGrid
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        onConnect={onConnect}
        fitView
      >
        <Panel position="top-left">top-left</Panel>
        <Background />
        <MiniMap />
        <Controls>
          <ControlButton
            onClick={() => alert("Something magical just happened. ✨")}
          >
            {/* <MagicWand /> */}
            hii
          </ControlButton>
        </Controls>
      </ReactFlow>
    </>
  );
}
