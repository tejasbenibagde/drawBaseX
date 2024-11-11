import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
} from "reactflow";
import { WritableDraft } from "immer";
// Define types for the table fields, nodes, and edges
interface TableField {
  name: string;
  type: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
}

interface TableData {
  id: number;
  label: string;
  fields: TableField[];
}

interface TableNode extends Node<TableData> {
  id: string;
  type: "tableNode";
  data: TableData;
  position: { x: number; y: number };
}

// Define TableEdge type as Edge with a specific label property
type TableEdge = Edge & {
  label: string;
};

// Define the initial state with a sample set of nodes and edges
interface TableState {
  nodes: TableNode[];
  edges: TableEdge[];
}

const initialState: TableState = {
  nodes: [
    {
      id: "1",
      type: "tableNode",
      data: {
        id: 1,
        label: "Users",
        fields: [
          { name: "id", type: "int", isPrimaryKey: true },
          { name: "name", type: "varchar" },
          { name: "email", type: "varchar" },
        ],
      },
      position: { x: 0, y: 0 },
    },
    {
      id: "2",
      type: "tableNode",
      data: {
        id: 2,
        label: "Orders",
        fields: [
          { name: "order_id", type: "int", isPrimaryKey: true },
          { name: "user_id", type: "int", isForeignKey: true },
          { name: "total", type: "decimal" },
        ],
      },
      position: { x: 200, y: 200 },
    },
  ],
  edges: [{ id: "1-2", source: "1", target: "2", label: "user_id" }],
};

// Create a Redux slice to manage nodes and edges in the state
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    // Action to add a new node to the state
    addNode: (state, action: PayloadAction<TableNode>) => {
      state.nodes.push(action.payload);
    },

    // Action to remove a node and its associated edges
    removeNode: (state, action: PayloadAction<string>) => {
      const nodeId = action.payload;
      state.nodes = state.nodes.filter((node) => node.id !== nodeId);
      state.edges = state.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      );
    },

    // Action to add a new edge between nodes
    addEdge: (state, action: PayloadAction<TableEdge>) => {
      state.edges.push(action.payload);
    },

    // Action to remove an edge by its ID
    removeEdge: (state, action: PayloadAction<string>) => {
      state.edges = state.edges.filter((edge) => edge.id !== action.payload);
    },

    // Action to update the node positions or data based on changes from React Flow
    updateNodes: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(
        action.payload,
        state.nodes
      ) as WritableDraft<TableNode>[];
    },

    // Action to update the edges based on changes from React Flow
    updateEdges: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(
        action.payload,
        state.edges
      ) as WritableDraft<TableEdge>[];
    },
  },
});

// Export the actions to use them in components
export const {
  addNode,
  removeNode,
  addEdge,
  removeEdge,
  updateNodes,
  updateEdges,
} = tableSlice.actions;

// Export the reducer to add it to the store
export default tableSlice.reducer;
