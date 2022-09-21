import { useEffect, useState, useContext } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

import ChildrenContainerView_support from "./ChildrenContainerView_support";

function ChildrenContainerView(props) {
  const [stateCheckbox, setStateCheckbox] = useState("None");

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({
        ...prev,
        ChildrenContainerView: stateCheckbox,
      }));
    }
  }, [ProSave.save]);

  return (
    <>
      <label className="Ganeral_label">Children Container View</label>
      <Form.Group>
        <Form.Field>
          <Checkbox
            radio
            label="None"
            name="checkboxRadioGroup"
            value="None"
            checked={stateCheckbox === "None"}
            onChange={(e) => setStateCheckbox("None")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Rows"
            name="checkboxRadioGroup"
            value="Rows"
            checked={stateCheckbox === "Rows"}
            onChange={(e) => setStateCheckbox("Rows")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Columns"
            name="checkboxRadioGroup"
            value="Columns"
            checked={stateCheckbox === "Columns"}
            onChange={(e) => setStateCheckbox("Columns")}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="Columns Wrap"
            name="checkboxRadioGroup"
            value="Columns Wrap"
            checked={stateCheckbox === "Columns Wrap"}
            onChange={(e) => setStateCheckbox("Columns Wrap")}
          />
        </Form.Field>
      </Form.Group>

      <ChildrenContainerView_support
        ValueSelect={stateCheckbox}
        key={props.keyId}
      />
    </>
  );
}

export default ChildrenContainerView;
