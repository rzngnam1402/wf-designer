import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import TextUpdaterNode from './components/reactflow/textUpdaterNode';

import './components/reactflow/text-updater-node.css';

import './App.css'

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: -100, y: 100 }, data: { value: 123 } },
  {
    id: 'node-2',
    type: 'output',
    targetPosition: 'left',
    position: { x: 250, y: 0 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'left',
    position: { x: 250, y: 200 },
    data: { label: 'node 3' },
  },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="canvas_container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
}

export default Flow;
