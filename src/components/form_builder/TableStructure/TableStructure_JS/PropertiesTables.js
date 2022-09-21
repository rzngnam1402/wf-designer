import { useDispatch } from "react-redux";
import { Label, Button } from "semantic-ui-react";

import "../TableStructure_CSS/PropertiesTables.css";
import DescriptionTable from "./DescriptionTable";

function PropertiesTables(props) {
  // render table inside modal
  const dispatch = useDispatch();

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
            dispatch(updateSave(false));
            // viet function xu ly thuoc tinh component o day
          }}
        >
          Save
        </Button>
        <Button
          secondary
          onClick={() => {
            dispatch(updateCancelSave(true));
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default PropertiesTables;
