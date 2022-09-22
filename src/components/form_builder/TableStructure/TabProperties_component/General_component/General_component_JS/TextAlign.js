import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { updateSave } from "../../../../../../features/builder/ButtonSave.js";
import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function TextAlign(props) {
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);
  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [stateCheckbox, setStateCheckbox] = useState(
    GenPro[orderBirth] ? GenPro[orderBirth].TextAlign || "Left" : "Left"
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { TextAlign: stateCheckbox };

      GenPro[orderBirth]
        ? (GenPro[orderBirth] = { ...GenPro[orderBirth], ...tempObj })
        : (GenPro = { ...GenPro, [orderBirth]: tempObj });

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [checkSave]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Text</label>
      <Form.Group className="WrapOption">
        <Form.Field>
          <Checkbox
            radio
            label="Left"
            name="checkboxRadioGroup"
            value="Left"
            checked={stateCheckbox === "Left"}
            onChange={(e) => setStateCheckbox("Left")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Center"
            name="checkboxRadioGroup"
            value="Center"
            checked={stateCheckbox === "Center"}
            onChange={(e) => setStateCheckbox("Center")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Right"
            name="checkboxRadioGroup"
            value="Right"
            checked={stateCheckbox === "Right"}
            onChange={(e) => setStateCheckbox("Right")}
          />
        </Form.Field>
      </Form.Group>
    </Form.Field>
  );
}

export default TextAlign;
