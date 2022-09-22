import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Format(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Format || "" : ""
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Format: valuePro };

      GenPro = { ...GenPro, ...tempObj };

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [valuePro]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Format</label>
      <input
        placeholder="Format"
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
      />
    </Form.Field>
  );
}

export default Format;
