import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, TextArea } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Content(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Content || "" : ""
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Content: valuePro };

      GenPro = { ...GenPro, ...tempObj };

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [valuePro]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Content</label>
      <TextArea
        value={valuePro}
        onChange={(e) => {
          setValuePro(e.target.value);
        }}
        placeholder="Content"
      />
    </Form.Field>
  );
}

export default Content;
