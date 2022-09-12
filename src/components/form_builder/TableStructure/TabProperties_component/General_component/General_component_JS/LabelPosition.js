import { Form, Dropdown } from "semantic-ui-react";

function LabelPosition() {
  const options = [
    { key: "1", text: "Default", value: "Default" },
    { key: "2", text: "Left", value: "Left" },
    { key: "3", text: "Right", value: "Right" },
    { key: "4", text: "Left corner", value: "Left corner" },
    { key: "5", text: "Right corner", value: "Right corner" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Dislay</label>
      <Dropdown placeholder="State" fluid selection options={options} />
    </Form.Field>
  );
}

export default LabelPosition;
