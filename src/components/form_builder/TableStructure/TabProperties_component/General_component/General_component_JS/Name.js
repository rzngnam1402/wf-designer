import { Form } from "semantic-ui-react";

function Name() {
  return (
    <Form.Field>
      <label className="Ganeral_label">Name</label>
      <input placeholder="Name" />
    </Form.Field>
  );
}

export default Name;
