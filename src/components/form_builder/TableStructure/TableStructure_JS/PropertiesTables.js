import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Label, Button } from "semantic-ui-react";

import "../TableStructure_CSS/PropertiesTables.css";

import { updateSave } from "../../../../features/builder/ButtonSave.js";
import { updateCancelSave } from "../../../../features/builder/ButtonCancelSave.js";
import { updateAllGenPro } from "../../../../features/builder/AllGenProperties.js";

import DescriptionTable from "./DescriptionTable";

function PropertiesTables(props) {
  // render table inside modal
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);
  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  const orderBirth = CheckOpen.orderBirth;

  useEffect(() => {
    dispatch(updateSave(false));
    dispatch(updateAllGenPro({ ...allGenPro, [orderBirth]: GeneralPro }));
  }, [checkSave]);

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
            dispatch(updateSave(true));
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
