import { Form, Input } from "semantic-ui-react";

function Icon() {
  return (
    <Form.Field>
      <label className="Ganeral_label">Icon</label>
      <Input action={{ icon: "question" }} placeholder="Icon Name" />
    </Form.Field>
  );
}

export default Icon;
