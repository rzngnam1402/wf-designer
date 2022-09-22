import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { updateSave } from "../../../../../../features/builder/ButtonSave.js";
import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Floated(props) {
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);
  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [stateCheckbox, setStateCheckbox] = useState(
    GenPro[orderBirth] ? GenPro[orderBirth].Floated || "Default" : "Default"
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Floated: stateCheckbox };

      GenPro[orderBirth]
        ? (GenPro[orderBirth] = { ...GenPro[orderBirth], ...tempObj })
        : (GenPro = { ...GenPro, [orderBirth]: tempObj });

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [checkSave]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Floated</label>
      <Form.Group>
        <Form.Field>
          <Checkbox
            radio
            label="Default"
            name="checkboxRadioGroup"
            value="Default"
            checked={stateCheckbox === "Default"}
            onChange={() => setStateCheckbox("Default")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Left"
            name="checkboxRadioGroup"
            value="Left"
            checked={stateCheckbox === "Left"}
            onChange={() => setStateCheckbox("Left")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Right"
            name="checkboxRadioGroup"
            value="Right"
            checked={stateCheckbox === "Right"}
            onChange={() => setStateCheckbox("Right")}
          />
        </Form.Field>
      </Form.Group>
    </Form.Field>
  );
}

export default Floated;
