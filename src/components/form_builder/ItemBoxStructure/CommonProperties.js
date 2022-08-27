import React from 'react'
import { Modal } from 'semantic-ui-react'

import PropertiesTables from './PropertiesTables'


function ModalExampleDimmer() {
    // -----------------------------------------------------------------------------------
    // Return Modal and surround properties tables
    // -----------------------------------------------------------------------------------

    return (
        <div>
            <Modal
                dimmer='inverted'
                open={true}
            >
                <PropertiesTables />
            </Modal>
        </div>
    )
}

export default ModalExampleDimmer