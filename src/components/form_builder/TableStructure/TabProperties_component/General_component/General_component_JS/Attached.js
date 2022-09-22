import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { updateSave } from "../../../../../../features/builder/ButtonSave.js";
import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Attached(props) {
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);
  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    GenPro[orderBirth] ? GenPro[orderBirth].Attached || "" : ""
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Attached: valuePro };

      GenPro[orderBirth]
        ? (GenPro[orderBirth] = { ...GenPro[orderBirth], ...tempObj })
        : (GenPro = { ...GenPro, [orderBirth]: tempObj });

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [checkSave]);

  const options = [
    { key: "1", text: "None", value: "None" },
    { key: "2", text: "Top", value: "Top" },
    { key: "3", text: "Bottom", value: "Bottom" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Attached</label>
      <Dropdown
        placeholder="State"
        fluid
        selection
        options={options}
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
      />
    </Form.Field>
  );
}

export default Attached;
