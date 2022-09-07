import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <div>
                <label htmlFor="text">Expression:</label>
                <input id="text" name="text" onChange={onChange} />
            </div>
            <Handle type="source" position={Position.Right} id="b" />
        </div>
    );
}

export default TextUpdaterNode;
