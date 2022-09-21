import { useEffect, useState, useContext } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Attached(props) {
  const [valuePro, setValuePro] = useState("None");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({ ...prev, Attached: valuePro }));
    }
  }, [ProSave.save]);

  const options = [
    { key: "1", text: "None", value: "None" },
    { key: "2", text: "Top", value: "Top" },
    { key: "3", text: "Bottom", value: "Bottom" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Attached</label>
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

export default Attached;
