import { useEffect, useState, useContext } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function TextAlign(props) {
  const [stateCheckbox, setStateCheckbox] = useState("Left");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({
        ...prev,
        TextAlign: stateCheckbox,
      }));
    }
  }, [ProSave.save]);

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
