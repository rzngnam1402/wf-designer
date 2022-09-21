import { useEffect, useState, useContext } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Size(props) {
  const [valuePro, setValuePro] = useState("");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({ ...prev, Size: valuePro }));
    }
  }, [ProSave.save]);

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
      <Dropdown
        placeholder="State"
        fluid
        selection
        options={options}
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
      />
    </Form.Field>
  );
}

export default Size;
