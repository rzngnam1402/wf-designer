import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Dropdown } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Attached(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Attached || "" : ""
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Attached: valuePro };

      GenPro = { ...GenPro, ...tempObj };

      dispatch(updateGeneralPro({ ...GenPro }));
    }
  }, [valuePro]);

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
        onChange={(e, { value }) => {
          setValuePro(value);
        }}
      />
    </Form.Field>
  );
}

export default Attached;
