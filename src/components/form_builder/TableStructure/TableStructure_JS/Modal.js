import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Modal, Button } from "semantic-ui-react";

import PropertiesTables from "./PropertiesTables";

import { updateModal } from "../../../../features/builder/CheckModal.js";
import { updateSave } from "../../../../features/builder/ButtonSave.js";
import { updateCancelSave } from "../../../../features/builder/ButtonCancelSave";

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
            onClose={() => {
              dispatch(updateCancelSave(false));
            }}
          >
            {/* //Content in Model inside */}
            <div>
              <Modal.Header>Question</Modal.Header>
              <Modal.Content>Close without save?</Modal.Content>
              <Modal.Actions>
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
              </Modal.Actions>
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
