import { Form, TextArea } from "semantic-ui-react";

function Content() {
  return (
    <Form.Field>
      <label className="Ganeral_label">Content</label>
      <TextArea placeholder="Content" />
    </Form.Field>
  );
}

export default Content;
