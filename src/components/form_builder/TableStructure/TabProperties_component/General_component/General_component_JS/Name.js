import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

import { updateSave } from "../../../../../../features/builder/ButtonSave.js";
import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Name(props) {
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);

  const [valuePro, setValuePro] = useState("");

  useEffect(() => {
    if (props.keyId) {
    }
  }, [checkSave]);

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
