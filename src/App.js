import {
  ReactFlowProvider,
} from 'react-flow-renderer';
import Flow from './components/reactflow/flowDiagram/flowDiagram';

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
