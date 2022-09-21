import { useEffect, useState, useContext } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Prefix(props) {
  const [valuePro_1, setValuePro_1] = useState("");
  const [valuePro_2, setValuePro_2] = useState("");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      if (valuePro_2 === true) {
        Proper.SetValueProperties((prev) => ({
          ...prev,
          Prefix: valuePro_1,
          ThousandSeparator: true,
        }));
      } else {
        Proper.SetValueProperties((prev) => ({
          ...prev,
          Prefix: valuePro_1,
          ThousandSeparator: false,
        }));
      }
    }
  }, [ProSave.save]);
  return (
    <>
      <Form.Field>
        <label className="Ganeral_label">Prefix</label>
        <input
          placeholder="Prefix"
          value={valuePro_1}
          onChange={(e) => {
            setValuePro_1(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Thousand Separator"
          onChange={(e) => {
            setValuePro_2(e.target.checked);
          }}
        />
      </Form.Field>
    </>
  );
}

export default Prefix;
