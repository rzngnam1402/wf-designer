
import { Modal } from 'semantic-ui-react'

function CommonProperties() {
    return (
        <div>
            <Modal
                dimmer="Inverted"
            >
                <Modal.Header>Use Google's location service?</Modal.Header>
                <Modal.Content>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </Modal.Content>
                <Modal.Actions>
                    Day la ben trong modal
                </Modal.Actions>
            </Modal>
        </div>
    )
}
export default CommonProperties