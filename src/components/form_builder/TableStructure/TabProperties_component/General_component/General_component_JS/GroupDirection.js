import { useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

function GroupDirection() {
  const [stateCheckbox, setStateCheckbox] = useState("Left");
  return (
    <Form.Field>
      <label className="Ganeral_label">Group Direction</label>
      <Form.Field>
        <Checkbox
          radio
          label="Hozirontal"
          name="checkboxRadioGroup"
          value="Hozirontal"
          checked={stateCheckbox === "Hozirontal"}
          onChange={(e) => setStateCheckbox("Hozirontal")}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label="Vertical"
          name="checkboxRadioGroup"
          value="Vertical"
          checked={stateCheckbox === "Vertical"}
          onChange={(e) => setStateCheckbox("Vertical")}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Read only" />
      </Form.Field>
    </Form.Field>
  );
}

export default GroupDirection;
