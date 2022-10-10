import { useSelector, useDispatch } from "react-redux";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Form } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Name(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  console.log("GenPro Name Start", GenPro);

  const [valuePro, setValuePro] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Name || "Default" : "Default"
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Name: valuePro };

      GenPro = { ...GenPro, ...tempObj };

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [valuePro]);

  return (
    <Form.Field>
      {console.log("GenPro Name", GenPro)}
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
