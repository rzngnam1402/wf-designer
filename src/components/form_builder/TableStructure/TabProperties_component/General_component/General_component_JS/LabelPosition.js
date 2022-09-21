import { useEffect, useState, useContext } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function LabelPosition(props) {
  const [valuePro, setValuePro] = useState("Default");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({
        ...prev,
        LabelPosition: valuePro,
      }));
    }
  }, [ProSave.save]);

  const options = [
    { key: "1", text: "Default", value: "Default" },
    { key: "2", text: "Left", value: "Left" },
    { key: "3", text: "Right", value: "Right" },
    { key: "4", text: "Left corner", value: "Left corner" },
    { key: "5", text: "Right corner", value: "Right corner" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Label position</label>
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

export default LabelPosition;
