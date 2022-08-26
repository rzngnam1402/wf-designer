import { useState } from 'react'


import './dropZone.css'
import { handleDragLeave, handleDragOver, handleDrop } from './DragAndDrop'
import ItemContent from './ItemContent'


function DropZone() {
    const [checkDrop, setCheckDrop] = useState('')
    const [checkOver, setCheckOver] = useState('')

    return (
        <div
            className={'dropZone notDrag'}
            onDragOver={(e) => {
                handleDragOver(e)
                setCheckOver(e.target)
            }}
            onDrop={(e) => {
                handleDrop(e)
                setCheckDrop(e.target)
                console.log('Please action');
                console.log(checkDrop);
            }}
            onDragLeave={(e) => {
                handleDragLeave(e)
                setCheckOver('')
            }}
        >
            {console.log("Render")}
            {console.log(checkDrop)}
            {/* {(checkDrop === checkOver && checkDrop !== '') ? console.log('Dung roi') : console.log('Sai roi')} */}
            DROP ZONE
        </div>
    )
}

export default DropZone
