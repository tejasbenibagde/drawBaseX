'use client';

import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TableNode from '@/components/layout/table-node';
import {
  updateNodes,
  updateEdges,
} from '@/redux/features/tableSlice';
import type { RootState, AppDispatch } from '@/redux/store';


const nodeTypes = {
  tableNode: TableNode,
};

export default function EditorPage() {
  const dispatch = useDispatch<AppDispatch>();

  // Using RootState to type the state from Redux
  const nodes = useSelector((state: RootState) => state.table.nodes);
  const edges = useSelector((state: RootState) => state.table.edges);

  // Handlers for node and edge changes
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => dispatch(updateNodes(changes)),
    [dispatch]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => dispatch(updateEdges(changes)),
    [dispatch]
  );

  return (
    <div className="w-full h-[calc(100vh-55px)]">
      <ReactFlow
        nodes={nodes as Node[]}
        edges={edges as Edge[]}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
