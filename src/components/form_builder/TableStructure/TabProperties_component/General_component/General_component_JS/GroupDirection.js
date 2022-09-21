import { useEffect, useState, useContext } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function GroupDirection(props) {
  const [stateCheckbox, setStateCheckbox] = useState("Left");

  const [valuePro, setValuePro] = useState("None");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      if (valuePro === true) {
        Proper.SetValueProperties((prev) => ({
          ...prev,
          GroupDirection: stateCheckbox,
          GroupDirectionReadOnly: true,
        }));
      } else {
        Proper.SetValueProperties((prev) => ({
          ...prev,
          GroupDirection: stateCheckbox,
          GroupDirectionReadOnly: false,
        }));
      }
    }
  }, [ProSave.save]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Group Direction</label>
      <Form.Field>
        <Checkbox
          radio
          label="Hozirontal"
          name="checkboxRadioGroup"
          value="Hozirontal"
          checked={stateCheckbox === "Hozirontal"}
          onChange={(e) => setStateCheckbox("Hozirontal")}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label="Vertical"
          name="checkboxRadioGroup"
          value="Vertical"
          checked={stateCheckbox === "Vertical"}
          onChange={(e) => setStateCheckbox("Vertical")}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Read only"
          onChange={(e) => {
            setValuePro(e.target.checked);
          }}
        />
      </Form.Field>
    </Form.Field>
  );
}

export default GroupDirection;
