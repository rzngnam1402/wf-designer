import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Modal, Button } from "semantic-ui-react";

import "../TableStructure_CSS/Modal.css";

import PropertiesTables from "./PropertiesTables";

import {
    updateModal,
    updateSave,
    updateCancelSave,
} from "../../../../features/builder";

function ModalExampleDimmer() {
    // -----------------------------------------------------------------------------------
    // Return Modal and surround properties tables
    // -----------------------------------------------------------------------------------
    const dispatch = useDispatch();

    const CheckOpen = useSelector((state) => state.checkModal.value);
    const checkSave = useSelector((state) => state.btnSave.value);
    const checkCancelSave = useSelector((state) => state.btnCancelSave.value);

    // provide

    useEffect(() => {
        dispatch(
            updateModal({
                check: false,
                nameItem: "",
            })
        );
    }, [checkSave]);

    return (
        <div>
            <Modal
                dimmer="inverted"
                open={CheckOpen.check}
                onClose={() => {
                    dispatch(updateCancelSave(true));
                }}
            >
                <PropertiesTables nameItem={CheckOpen.nameItem} />
                {/* // Modal on Modal */}
                {checkCancelSave && (
                    <Modal
                        dimmer="inverted"
                        open={checkCancelSave}
                        size="tiny"
                        onClose={() => {
                            dispatch(updateCancelSave(false));
                        }}
                    >
                        {/* //Content in Model inside */}
                        <div className="secondModal">
                            <div className="secondModal_header">Question</div>
                            <div className="secondModal_content">
                                Close without save?
                            </div>
                            <div className="secondModal_footer">
                                <Button
                                    primary
                                    onClick={() => {
                                        dispatch(updateCancelSave(false));
                                        dispatch(updateSave(false));
                                        dispatch(
                                            updateModal({
                                                check: false,
                                                nameItem: "",
                                            })
                                        );
                                    }}
                                >
                                    OK
                                </Button>
                                <Button
                                    secondary
                                    onClick={() => {
                                        dispatch(updateCancelSave(false));
                                        dispatch(updateSave(false));
                                    }}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                        {/* //End content */}
                    </Modal>
                    // End modal inside
                )}
            </Modal>
        </div>
    );
}

export default ModalExampleDimmer;
