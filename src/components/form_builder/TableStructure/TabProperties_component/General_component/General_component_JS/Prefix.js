import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Prefix(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro_1, setValuePro_1] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Name || "" : ""
  );
  const [valuePro_2, setValuePro_2] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Name || false : false
  );

  useEffect(() => {
    if (props.keyId !== false) {
      if (valuePro_2 === true) {
        let tempObj_1 = { Prefix: valuePro_1, ThousandSeparator: true };

        GenPro = { ...GenPro, ...tempObj_1 };

        dispatch(updateGeneralPro({ ...GenPro }));
      } else {
        let tempObj_2 = { Prefix: valuePro_1, ThousandSeparator: false };

        GenPro = { ...GenPro, ...tempObj_2 };

        dispatch(updateGeneralPro({ ...GenPro }));
      }
    }
    // dispatch(updateSave(false));
  }, [valuePro_1, valuePro_2]);
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
