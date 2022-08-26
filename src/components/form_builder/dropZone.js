import { useState, useEffect } from 'react'


import './dropZone.css'
import { handleDragLeave, handleDragOver, handleDrop } from './DragAndDrop'
import ItemContent from './ItemContent'

import { IdItemInsertContext } from "./idItemProder";
import { useContext } from "react";


function DropZone() {
    // --------------------------------------------------------
    // Return Dropzone where can drop itemBox component
    // --------------------------------------------------------

    const [checkDrop, setCheckDrop] = useState()
    const [checkOver, setCheckOver] = useState()
    const [nodeCurrent, setNodeCurrent] = useState(false)
    const [idNodeInsert, setIdNodeInsert] = useState([])

    const DropZoneContent = useContext(IdItemInsertContext)

    useEffect(() => {
        (checkDrop === checkOver && checkDrop !== undefined) ? setNodeCurrent(true) : setNodeCurrent(false)
    }, [nodeCurrent])

    return (
        <>
            <div
                className={'dropZone notDrag'}
                onDragOver={(e) => {
                    handleDragOver(e)
                    setCheckOver(e.target)
                }}
                onDrop={(e) => {
                    setNodeCurrent(e.target)
                    setCheckDrop(e.target)
                }}
                onDragLeave={(e) => {
                    handleDragLeave(e)
                    setCheckOver('')
                }}
            >
                DROP ZONE
            </div>
            {nodeCurrent && setIdNodeInsert()}
        </>
    )
}

export default DropZone
