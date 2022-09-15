import { useContext } from "react";
import { Modal } from "semantic-ui-react";

import PropertiesTables from "./PropertiesTables";
import { checkModal } from "../../form_builder_Provider/idItemProvider";

function ModalExampleDimmer() {
  // -----------------------------------------------------------------------------------
  // Return Modal and surround properties tables
  // -----------------------------------------------------------------------------------
  const CheckOpen = useContext(checkModal);

  return (
    <div>
      <Modal
        dimmer="inverted"
        open={CheckOpen.ToggleModal.check}
        onClose={() => {
          CheckOpen.setValueToggleModal({ check: false, Itemname: "" });
        }}
      >
        <PropertiesTables nameItem={CheckOpen.ToggleModal.nameItem} />
      </Modal>
    </div>
  );
}

export default ModalExampleDimmer;
