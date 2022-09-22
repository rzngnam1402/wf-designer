import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { updateSave } from "../../../../../../features/builder/ButtonSave.js";
import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function LabelPosition(props) {
  const dispatch = useDispatch();

  const checkSave = useSelector((state) => state.btnSave.value);
  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    GenPro[orderBirth]
      ? GenPro[orderBirth].LabelPosition || "Default"
      : "Default"
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { LabelPosition: valuePro };

      GenPro[orderBirth]
        ? (GenPro[orderBirth] = { ...GenPro[orderBirth], ...tempObj })
        : (GenPro = { ...GenPro, [orderBirth]: tempObj });

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [checkSave]);

  const options = [
    { key: "1", text: "Default", value: "Default" },
    { key: "2", text: "Left", value: "Left" },
    { key: "3", text: "Right", value: "Right" },
    { key: "4", text: "Left corner", value: "Left corner" },
    { key: "5", text: "Right corner", value: "Right corner" },
  ];

  return (
    <Form.Field>
      <label className="General_Extra_View_label">Label position</label>
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

export default LabelPosition;
