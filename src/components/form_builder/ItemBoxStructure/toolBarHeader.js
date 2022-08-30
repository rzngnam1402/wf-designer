import { useContext } from 'react'

import './toolBarHeader.css'
import { checkModal } from '../idItemProder'

function ToolBarHeader() {
    const ModifiedProperties = useContext(checkModal)

    return (
        <div className="toolBarHeader_container">
            <div className="toolBarHeader_title">container_1</div>
            <i className="fa-solid fa-maximize"></i>
            <i className="fa-solid fa-pen-to-square" onClick={() => { ModifiedProperties.setValueToggleModal(true) }}></i>
            <i className="fa-solid fa-copy"></i>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    )
}

export default ToolBarHeader