import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { updateSave } from "../../../../../../features/builder/ButtonSave.js";
import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Size(props) {
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);
  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    GenPro[orderBirth] ? GenPro[orderBirth].Size || "Default" : "Default"
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Size: valuePro };

      GenPro[orderBirth]
        ? (GenPro[orderBirth] = { ...GenPro[orderBirth], ...tempObj })
        : (GenPro = { ...GenPro, [orderBirth]: tempObj });

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [checkSave]);

  const options = [
    { key: "1", text: "Default", value: "Default" },
    { key: "2", text: "Mini", value: "Mini" },
    { key: "3", text: "Tiny", value: "Tiny" },
    { key: "4", text: "Small", value: "Small" },
    { key: "5", text: "Medium", value: "Medium" },
    { key: "6", text: "Large", value: "Large" },
    { key: "7", text: "Huge", value: "Huge" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Size</label>
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

export default Size;
