import { useCallback, useState } from 'react';
import ReactFlow, {
    addEdge, applyEdgeChanges, applyNodeChanges,
    useReactFlow,
    Controls
} from 'react-flow-renderer';

import TextUpdaterNode from '../textUpdaterNode/textUpdaterNode';

import '../textUpdaterNode/text-updater-node.css';

import './flowDiagram.css'

const rfStyle = {
    backgroundColor: '#B8CEFF',
};

const initialNodes = [
    { id: 'expression-1', type: 'textUpdater', position: { x: -100, y: 100 } },
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
    const addNodeHandler = useCallback((type) => {
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

    const exportHandler = useCallback(() => {
        console.log(reactFlowInstance.toObject());
    }, [reactFlowInstance]);

    return (
        <div className="canvas_container">
            <div className='btn_container'>
                <button onClick={() => addNodeHandler('CEO')} className="btn-add">
                    Add CEO node
                </button>
                <button onClick={() => addNodeHandler('CTO')} className="btn-add">
                    Add CTO node
                </button>
                <button onClick={() => addNodeHandler('BO')} className="btn-add">
                    Add BO node
                </button>
                <button onClick={exportHandler} className='btn-add'>
                    Export Graph to Json
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

export default Flow;