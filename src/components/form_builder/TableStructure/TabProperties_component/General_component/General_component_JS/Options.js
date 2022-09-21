import { useEffect, useState, useContext } from "react";
import { Form, Checkbox } from "semantic-ui-react";

import "../General_component_CSS/Options.css";

import { BtnSave } from "../../../../form_builder_Provider/idItemProvider";
import { GeneralProperties } from "../../../../form_builder_Provider/idItemProvider";

function Options(props) {
  const [valuePro, setValuePro] = useState({});

  const ProSave = useContext(BtnSave);
  const Proper = useContext(GeneralProperties);

  useEffect(() => {
    if (props.keyId !== false) {
      Proper.SetValueProperties((prev) => ({ ...prev, Options: valuePro }));
    }
  }, [ProSave.save]);

  return (
    <Form.Field>
      <label className="Ganeral_label">Options</label>
      <Form.Group className="WrapOption">
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Multiple"
              value="Multiple"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Multiple: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Search"
              value="Search"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Search: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Clearable"
              value="Clearable"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Clearable: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Button" || props.nameItem === "Label") && (
          <Form.Field>
            <Checkbox
              label="Basic"
              value="Basic"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Basic: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Button" || props.nameItem === "Label") && (
          <Form.Field>
            <Checkbox
              label="Circular"
              value="Circular"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Circular: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox
              label="Corner"
              value="Corner"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Corner: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox
              label="Floating"
              value="Floating"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Floating: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox
              label="Pointing"
              value="Pointing"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Pointing: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Compact"
              value="Compact"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Compact: e.target.value }));
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
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Disabled: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {(props.nameItem === "Input" || props.nameItem === "NumberFormat") && (
          <Form.Field>
            <Checkbox
              label="Transparent"
              value="Transparent"
              onChange={(e) => {
                setValuePro((prev) => ({
                  ...prev,
                  Transparent: e.target.value,
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
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Fluid: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Link"
              value="Link"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Link: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Primary"
              value="Primary"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Primary: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox
              label="Secondary"
              value="Secondary"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Secondary: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox
              label="Selection"
              value="Selection"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Selection: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Fitted"
              value="Fitted"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Fitted: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Indeterminate"
              value="Indeterminate"
              onChange={(e) => {
                setValuePro((prev) => ({
                  ...prev,
                  Indeterminate: e.target.value,
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
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, ReadOnly: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Slider"
              value="Slider"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Slider: e.target.value }));
              }}
            />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox
              label="Toggle"
              value="Toggle"
              onChange={(e) => {
                setValuePro((prev) => ({ ...prev, Toggle: e.target.value }));
              }}
            />
          </Form.Field>
        )}
      </Form.Group>
    </Form.Field>
  );
}

export default Options;
