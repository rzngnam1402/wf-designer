import { useEffect, useState, useContext } from "react";
import { Form } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Placeholder(props) {
  const [valuePro, setValuePro] = useState("");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({ ...prev, Placeholder: valuePro }));
    }
  }, [ProSave.save]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Placeholder</label>
      <input
        placeholder="Placeholder"
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
      />
    </Form.Field>
  );
}

export default Placeholder;
