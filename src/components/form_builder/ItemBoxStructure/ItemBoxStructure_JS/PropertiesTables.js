import { useContext } from "react";
import { Label, Button } from "semantic-ui-react";

import "../ItemBoxStructure_CSS/PropertiesTables.css";
import DescriptionTable from "./DescriptionTable";
import { checkModal } from "../../form_builder_Provider/idItemProvider";

function PropertiesTables() {
  const ButtonToggleModal = useContext(checkModal);

  return (
    <div>
      <div className="Modal_inside">
        <div className="Modal_inside_container">
          <Label className="Label_common">container</Label>
          <div className="Modal_description_table">
            <DescriptionTable></DescriptionTable>
          </div>
        </div>
      </div>
      <div className="Modal_inside_action">
        <Button
          primary
          onClick={() => {
            ButtonToggleModal.setValueToggleModal(false);
          }}
        >
          Save
        </Button>
        <Button
          secondary
          onClick={() => {
            ButtonToggleModal.setValueToggleModal(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default PropertiesTables;
