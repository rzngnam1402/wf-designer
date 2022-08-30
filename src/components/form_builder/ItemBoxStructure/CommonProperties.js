import { useContext } from 'react'
import { Modal } from 'semantic-ui-react'

import PropertiesTables from './PropertiesTables'
import { checkModal } from '../idItemProder'


function ModalExampleDimmer() {
    // -----------------------------------------------------------------------------------
    // Return Modal and surround properties tables
    // -----------------------------------------------------------------------------------
    const CheckOpen = useContext(checkModal)

    return (
        <div>
            <Modal
                dimmer='inverted'
                open={CheckOpen.ToggleModal}
                onClose={() => { CheckOpen.setValueToggleModal(false) }}
            >
                <PropertiesTables />
            </Modal>
        </div>
    )
}

export default ModalExampleDimmer