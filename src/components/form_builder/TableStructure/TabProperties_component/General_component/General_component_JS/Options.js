import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import { updateGeneralPro } from "../../../../../../features/builder/GeneralProperties";

function Options(props) {
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);

  var GenPro = JSON.parse(JSON.stringify(GeneralPro));
  var orderBirth = CheckOpen.orderBirth;

  const [valuePro, setValuePro] = useState(
    allGenPro[orderBirth] ? allGenPro[orderBirth].Name || {} : {}
  );

  useEffect(() => {
    if (props.keyId) {
      let tempObj = { Options: valuePro };

      GenPro = { ...GenPro, ...tempObj };

      dispatch(updateGeneralPro({ ...GenPro }));
    }

    // dispatch(updateSave(false));
  }, [valuePro]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Options</label>
      <Form.Group className="WrapOption">
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Multiple"
              value="Multiple"
              checked={valuePro.Multiple}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Multiple: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Search"
              value="Search"
              check={valuePro.Search}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Search: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Clearable"
              value="Clearable"
              check={valuePro.Clearable}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Clearable: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Button" || props.nameItem === "Label") && (
          <Form.Field>
            <Checkbox
              label="Basic"
              value="Basic"
              check={valuePro.Basic}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Basic: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Button" || props.nameItem === "Label") && (
          <Form.Field>
            <Checkbox
              label="Circular"
              value="Circular"
              check={valuePro.Circular}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Circular: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox
              label="Corner"
              value="Corner"
              check={valuePro.Corner}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Corner: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox
              label="Floating"
              value="Floating"
              check={valuePro.Floating}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Floating: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox
              label="Pointing"
              value="Pointing"
              check={valuePro.Pointing}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Pointing: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Compact"
              value="Compact"
              check={valuePro.Compact}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Compact: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Input" ||
          props.nameItem === "NumberFormat" ||
          props.nameItem === "Dropdown" ||
          props.nameItem === "Checkbox" ||
          props.nameItem === "Button") && (
          <Form.Field>
            <Checkbox
              label="Disabled"
              value="Disabled"
              check={valuePro.Disabled}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Disabled: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Input" || props.nameItem === "NumberFormat") && (
          <Form.Field>
            <Checkbox
              label="Transparent"
              value="Transparent"
              check={valuePro.Transparent}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Transparent: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Input" ||
          props.nameItem === "NumberFormat" ||
          props.nameItem === "Button") && (
          <Form.Field>
            <Checkbox
              label="Fluid"
              value="Fluid"
              check={valuePro.Fluid}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Fluid: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Link"
              value="Link"
              check={valuePro.Link}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Link: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Primary"
              value="Primary"
              check={valuePro.Primary}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Primary: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Secondary"
              value="Secondary"
              check={valuePro.Secondary}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Secondary: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Selection"
              value="Selection"
              check={valuePro.Selection}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Selection: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Fitted"
              value="Fitted"
              check={valuePro.Fitted}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Fitted: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Indeterminate"
              value="Indeterminate"
              check={valuePro.Indeterminate}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  Indeterminate: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Input" ||
          props.nameItem === "NumberFormat" ||
          props.nameItem === "TextArea" ||
          props.nameItem === "Checkbox") && (
          <Form.Field>
            <Checkbox
              label="Read only"
              value="Read only"
              check={valuePro.ReadOnly}
              onChange={(e, data) => {
                setValuePro((prev) => ({
                  ...prev,
                  ReadOnly: data.checked,
                }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Slider"
              value="Slider"
              check={valuePro.Slider}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Slider: data.checked }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Toggle"
              value="Toggle"
              check={valuePro.Toggle}
              onChange={(e, data) => {
                setValuePro((prev) => ({ ...prev, Toggle: data.checked }));
              }}
            />
          </Form.Field>
        )}
      </Form.Group>
    </Form.Field>
  );
}

export default Options;
