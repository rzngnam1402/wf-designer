import { useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

function Floated() {
  const [stateCheckbox, setStateCheckbox] = useState("Default");
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
            onChange={(e) => setStateCheckbox("Default")}
          />
        </Form.Field>
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

export default Floated;
