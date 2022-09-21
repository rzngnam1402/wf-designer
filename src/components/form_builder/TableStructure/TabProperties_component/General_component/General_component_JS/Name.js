import { useEffect, useState, useContext } from "react";
import { Form } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { ObjectProperties } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Name(props) {
  const [valuePro, setValuePro] = useState("");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId) {
      // Proper.properties = { ...Proper.properties, [props.keyId]: valuePro };
      // Proper.SetValueProperties((prev) => ({ ...prev, Name: valuePro }));
    }
  }, [ProSave.save]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Name</label>
      <input
        placeholder="Name"
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
      />
    </Form.Field>
  );
}

export default Name;
