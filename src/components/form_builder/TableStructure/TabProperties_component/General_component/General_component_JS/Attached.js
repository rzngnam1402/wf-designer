import { Form, Dropdown } from "semantic-ui-react";

function Size() {
  const options = [
    { key: "1", text: "None", value: "None" },
    { key: "2", text: "Top", value: "Top" },
    { key: "3", text: "Bottom", value: "Bottom" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Attached</label>
      <Dropdown placeholder="State" fluid selection options={options} />
    </Form.Field>
  );
}

export default Size;
