import { useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

function TextAlign() {
  const [stateCheckbox, setStateCheckbox] = useState("Left");
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
