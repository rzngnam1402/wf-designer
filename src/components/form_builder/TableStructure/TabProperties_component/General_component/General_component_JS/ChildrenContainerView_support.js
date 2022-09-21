import { useEffect, useState, useContext } from "react";
import { Dropdown, Form, TextArea } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

import "../General_component_CSS/ChildContainerView_support.css";

function ChildrenContainerView_support({ ValueSelect, keyId }) {
  const [valuePro_1, setValuePro_1] = useState("Not set");
  const [valuePro_2, setValuePro_2] = useState("None");
  const [valuePro_3, setValuePro_3] = useState();

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (keyId !== false) {
      if (ValueSelect === "None") {
        Proper.SetValueProperties((prev) => ({
          ...prev,
          display: valuePro_1,
          float: valuePro_2,
        }));
      } else {
        Proper.SetValueProperties((prev) => ({
          ...prev,
          ChildrenContainerStyle: valuePro_3,
        }));
      }
    }
  }, [ProSave.save]);

  const options_display = [
    { key: "1", text: "(Not set)", value: "Not set" },
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
  const options_float = [
    { key: "1", text: "None", value: "None" },
    { key: "2", text: "Left", value: "Left" },
    { key: "3", text: "Right", value: "Right" },
    { key: "4", text: "Inherit", value: "Inherit" },
    { key: "5", text: "Initialeft", value: "Initial" },
  ];

  switch (ValueSelect) {
    case "None":
      return (
        <Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label className="General_Extra_View_label">Dislay</label>
              <Dropdown
                placeholder="State"
                fluid
                selection
                options={options_display}
                value={valuePro_1}
                onChange={(e) => {
                  setValuePro_1(e.target.value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label className="General_Extra_View_label">Float</label>
              <Dropdown
                placeholder="State"
                fluid
                selection
                options={options_float}
                value={valuePro_2}
                onChange={(e) => {
                  setValuePro_2(e.target.value);
                }}
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>
      );

    default:
      return (
        <>
          <Form.Field>
            <label className="General_Extra_View_label">
              Children Container Style
            </label>
            <TextArea
              value={valuePro_3}
              onChange={(e) => {
                setValuePro_3(e.target.value);
              }}
              placeholder={`/*** Example Code ***/
color:red;
paddingTop:5px;`}
            />
          </Form.Field>
        </>
      );
  }
}

export default ChildrenContainerView_support;
