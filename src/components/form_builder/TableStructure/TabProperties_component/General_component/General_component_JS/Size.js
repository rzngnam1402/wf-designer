import { Form, Dropdown } from "semantic-ui-react";

function Size() {
  const options = [
    { key: "1", text: "Default", value: "Default" },
    { key: "2", text: "Mini", value: "Mini" },
    { key: "3", text: "Tiny", value: "Tiny" },
    { key: "4", text: "Small", value: "Small" },
    { key: "5", text: "Medium", value: "Medium" },
    { key: "6", text: "Large", value: "Large" },
    { key: "7", text: "Huge", value: "Huge" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Size</label>
      <Dropdown placeholder="State" fluid selection options={options} />
    </Form.Field>
  );
}

export default Size;
