import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function GroupDirection(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [stateCheckbox, setStateCheckbox] = useState(
    allGenPro[orderBirth]
      ? allGenPro[orderBirth].GroupDirection || "Hozirontal"
      : "Hozirontal"
  );

  const [valuePro, setValuePro] = useState(
    GenPro[orderBirth]
      ? GenPro[orderBirth].GroupDirectionReadOnly || false
      : false
  );

  useEffect(() => {
    if (props.keyId !== false) {
      if (valuePro === true) {
        let tempObj_1 = {
          GroupDirection: stateCheckbox,
          GroupDirectionReadOnly: true,
        };

        GenPro = { ...GenPro, ...tempObj_1 };

        dispatch(updateGeneralPro({ ...GenPro }));
      } else {
        let tempObj_2 = {
          GroupDirection: stateCheckbox,
          GroupDirectionReadOnly: false,
        };
        GenPro = { ...GenPro, ...tempObj_2 };

        dispatch(updateGeneralPro({ ...GenPro }));
      }
    }
    // dispatch(updateSave(false));
  }, [stateCheckbox, valuePro]);

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
