import { Form } from "semantic-ui-react";

function Mark() {
  return (
    <Form.Field>
      <label className="Ganeral_label">Mark</label>
      <input placeholder="Mark" disabled />
    </Form.Field>
  );
}

export default Mark;
