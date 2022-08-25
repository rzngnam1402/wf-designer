import { useState } from 'react'


import './dropZone.css'
import { handleDragOver, handleDrop } from './DragAndDrop'


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
            }}
            onDragLeave={() => { setCheckOver('') }}
        >
            {(checkDrop === checkOver) ? console.log('Dung roi') : console.log('Sai roi')}
        </div>
    )
}

export default DropZone
