import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

import ChildrenContainerView_support from "./ChildrenContainerView_support";

function ChildrenContainerView(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [stateCheckbox, setStateCheckbox] = useState(
    allGenPro[orderBirth]
      ? allGenPro[orderBirth].ChildrenContainerView || "None"
      : "None"
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { ChildrenContainerView: stateCheckbox };

      GenPro = { ...GenPro, ...tempObj };

      dispatch(updateGeneralPro({ ...GenPro }));
    }
    // dispatch(updateSave(false));
  }, [stateCheckbox]);

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
        keyId={props.keyId}
      />
    </>
  );
}

export default ChildrenContainerView;
