import { useEffect, useState, useContext } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Floated(props) {
  const [stateCheckbox, setStateCheckbox] = useState("Default");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({
        ...prev,
        Floated: stateCheckbox,
      }));
    }
  }, [ProSave.save]);
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
