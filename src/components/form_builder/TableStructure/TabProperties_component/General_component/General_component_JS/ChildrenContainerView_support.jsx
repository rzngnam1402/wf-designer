import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Dropdown, Form, TextArea } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

import "../General_component_CSS/ChildContainerView_support.css";

function ChildrenContainerView_support({ ValueSelect, keyId }) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro_1, setValuePro_1] = useState(
    allGenPro[orderBirth]
      ? allGenPro[orderBirth].display || "Not set"
      : "Not set"
  );
  const [valuePro_2, setValuePro_2] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].float || "None" : "None"
  );
  const [valuePro_3, setValuePro_3] = useState(
    allGenPro[orderBirth]
      ? allGenPro[orderBirth].ChildrenContainerStyle || ""
      : ""
  );

  useEffect(() => {
    if (keyId) {
      if (ValueSelect === "None") {
        let tempObj_1 = { display: valuePro_1, float: valuePro_2 };

        GenPro = { ...GenPro, ...tempObj_1 };

        dispatch(updateGeneralPro({ ...GenPro }));
      } else {
        let tempObj_2 = { ChildrenContainerStyle: valuePro_3 };

        GenPro = { ...GenPro, ...tempObj_2 };

        dispatch(updateGeneralPro({ ...GenPro }));
      }
    }
  }, [valuePro_1, valuePro_2, valuePro_3]);

  const options_display = [
    { key: "1", text: "(Not set)", value: "Not set" },
    { key: "2", text: "Flex", value: "Flex" },
    { key: "3", text: "Block", value: "Block" },
    { key: "4", text: "Inline", value: "Inline" },
    { key: "5", text: "Flow", value: "Flow" },
    { key: "6", text: "Flow-root", value: "Flow-root" },
    { key: "7", text: "Table", value: "Table" },
    { key: "8", text: "Grid", value: "Grid" },
    { key: "9", text: "Contents", value: "Contents" },
    { key: "10", text: "Inline-block", value: "Inline-block" },
    { key: "11", text: "Inline-table", value: "Inline-table" },
    { key: "12", text: "Inline-flex", value: "Inline-flex" },
    { key: "13", text: "Inline-grid", value: "Inline-grid" },
    { key: "14", text: "Inherit", value: "Inherit" },
    { key: "15", text: "Initial", value: "Initial" },
    { key: "16", text: "None", value: "None" },
  ];
  const options_float = [
    { key: "1", text: "None", value: "None" },
    { key: "2", text: "Left", value: "Left" },
    { key: "3", text: "Right", value: "Right" },
    { key: "4", text: "Inherit", value: "Inherit" },
    { key: "5", text: "Initialeft", value: "Initial" },
  ];

  switch (ValueSelect) {
    case "None":
      return (
        <Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label className="General_Extra_View_label">Dislay</label>
              <Dropdown
                placeholder="State"
                fluid
                selection
                options={options_display}
                value={valuePro_1}
                onChange={(e, { value }) => {
                  setValuePro_1(value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label className="General_Extra_View_label">Float</label>
              <Dropdown
                placeholder="State"
                fluid
                selection
                options={options_float}
                value={valuePro_2}
                onChange={(e, { value }) => {
                  setValuePro_2(value);
                }}
              />
            </Form.Field>
          </Form.Group>
        </Form.Field>
      );

    default:
      return (
        <>
          <Form.Field>
            <label className="General_Extra_View_label">
              Children Container Style
            </label>
            <TextArea
              value={valuePro_3}
              onChange={(e) => {
                setValuePro_3(e.target.value);
              }}
              placeholder={`/*** Example Code ***/
color:red;
paddingTop:5px;`}
            />
          </Form.Field>
        </>
      );
  }
}

export default ChildrenContainerView_support;
