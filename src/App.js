import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge, applyEdgeChanges, applyNodeChanges,
  useReactFlow, ReactFlowProvider,
  Controls
} from 'react-flow-renderer';

import TextUpdaterNode from './components/reactflow/textUpdaterNode';

import './components/reactflow/text-updater-node.css';

import './App.css'

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: -100, y: 100 }, data: { value: 123 } },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

let nodeId = 1;

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

  const reactFlowInstance = useReactFlow();
  const onClickHandler = useCallback((type) => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 200,
        y: Math.random() * 200,
      },
      sourcePosition: 'right',
      targetPosition: 'left',
      data: {
        label: `${type}`,
      },

    };
    reactFlowInstance.addNodes(newNode);
  }, [reactFlowInstance]);

  let isDraggable = false;

  return (
    <div className="canvas_container">
      <div className='btn_container'>
        <button onClick={() => onClickHandler('CEO')} className="btn-add">
          Add CEO node
        </button>
        <button onClick={() => onClickHandler('CTO')} className="btn-add">
          Add CTO node
        </button>
        <button onClick={() => onClickHandler('BO')} className="btn-add">
          Add BO node
        </button>
      </div>
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
      <Controls />
    </div >
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
