import { useContext } from "react";
import { Label, Button } from "semantic-ui-react";

import "../TableStructure_CSS/PropertiesTables.css";
import DescriptionTable from "./DescriptionTable";
import { checkModal } from "../../form_builder_Provider/idItemProvider";

function PropertiesTables(props) {
  // render table inside modal
  const ButtonToggleModal = useContext(checkModal);

  return (
    <div>
      <div className="Modal_inside">
        <div className="Modal_inside_container">
          <Label className="Label_common">{props.nameItem}</Label>
          <div className="Modal_description_table">
            <DescriptionTable></DescriptionTable>
          </div>
        </div>
      </div>
      <div className="Modal_inside_action">
        <Button
          primary
          onClick={() => {
            ButtonToggleModal.setValueToggleModal({
              check: false,
              nameItem: "",
            });
          }}
        >
          Save
        </Button>
        <Button
          secondary
          onClick={() => {
            ButtonToggleModal.setValueToggleModal({
              check: false,
              nameItem: "",
            });
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default PropertiesTables;
