import { useEffect, useState, useContext } from "react";
import { Form, TextArea } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Content(props) {
  const [valuePro, setValuePro] = useState("");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({ ...prev, Content: valuePro }));
    }
  }, [ProSave.save]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Content</label>
      <TextArea
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
        placeholder="Content"
      />
    </Form.Field>
  );
}

export default Content;
