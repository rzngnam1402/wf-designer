import { Form, Checkbox } from "semantic-ui-react";

function Prefix() {
  return (
    <>
      <Form.Field>
        <label className="Ganeral_label">Prefix</label>
        <input placeholder="Prefix" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Thousand Separator" />
      </Form.Field>
    </>
  );
}

export default Prefix;
