import { Dropdown, Form, TextArea } from "semantic-ui-react";

import "../TabProperties_CPN_CSS/General_additional_checkbox.css";

function GeneralExtraView({ ValueSelect }) {
  const options = [
    { key: "1", text: "(Not set)", value: "(Not set)" },
    { key: "2", text: "Flex", value: "Flex" },
    { key: "3", text: "Block", value: "Block" },
    { key: "4", text: "Inline", value: "Inline" },
    { key: "5", text: "Flow", value: "Flow" },
    { key: "6", text: "Flow-root", value: "Flow-root" },
    { key: "7", text: "Table", value: "Table" },
    { key: "8", text: "Grid", value: "Grid" },
    { key: "9", text: "Contents", value: "Contents" },
    { key: "10", text: "Inline-block", value: "Inline-block" },
    { key: "11", text: "Inline-table", value: "Inline-table" },
    { key: "12", text: "Inline-flex", value: "Inline-flex" },
    { key: "13", text: "Inline-grid", value: "Inline-grid" },
    { key: "14", text: "Inherit", value: "Inherit" },
    { key: "15", text: "Initial", value: "Initial" },
    { key: "16", text: "None", value: "None" },
  ];

  switch (ValueSelect) {
    case "None":
      return (
        <>
          <Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label className="General_Extra_View_label">Dislay</label>
                <Dropdown
                  placeholder="State"
                  fluid
                  selection
                  options={options}
                />
              </Form.Field>
              <Form.Field>
                <label className="General_Extra_View_label">Float</label>
                <Dropdown
                  placeholder="State"
                  fluid
                  selection
                  options={options}
                />
              </Form.Field>
            </Form.Group>
          </Form.Field>
        </>
      );

    default:
      return (
        <>
          <Form.Field>
            <label className="General_Extra_View_label">
              Children Container Style
            </label>
            <TextArea
              placeholder={`/*** Example Code ***/
color:red;
paddingTop:5px;`}
            />
          </Form.Field>
        </>
      );
  }
}

export default GeneralExtraView;
