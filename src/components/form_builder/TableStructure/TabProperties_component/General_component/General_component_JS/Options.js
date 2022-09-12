import { Form, Checkbox } from "semantic-ui-react";

import "../General_component_CSS/Options.css";

function Options(props) {
  return (
    <Form.Field>
      <label className="Ganeral_label">Options</label>
      <Form.Group className="WrapOption">
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox label="Multiple" />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox label="Search" />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox label="Clearable" />
          </Form.Field>
        )}
        {(props.nameItem === "Button" || props.nameItem === "Label") && (
          <Form.Field>
            <Checkbox label="Basic" />
          </Form.Field>
        )}
        {(props.nameItem === "Button" || props.nameItem === "Label") && (
          <Form.Field>
            <Checkbox label="Circular" />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox label="Corner" />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox label="Floating" />
          </Form.Field>
        )}
        {props.nameItem === "Label" && (
          <Form.Field>
            <Checkbox label="Pointing" />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox label="Compact" />
          </Form.Field>
        )}
        {(props.nameItem === "Input" ||
          props.nameItem === "NumberFormat" ||
          props.nameItem === "Dropdown" ||
          props.nameItem === "Checkbox" ||
          props.nameItem === "Button") && (
          <Form.Field>
            <Checkbox label="Disabled" />
          </Form.Field>
        )}
        {(props.nameItem === "Input" || props.nameItem === "NumberFormat") && (
          <Form.Field>
            <Checkbox label="Transparent" />
          </Form.Field>
        )}
        {(props.nameItem === "Input" ||
          props.nameItem === "NumberFormat" ||
          props.nameItem === "Button") && (
          <Form.Field>
            <Checkbox label="Fluid" />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox label="Link" />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox label="Primary" />
          </Form.Field>
        )}
        {props.nameItem === "Button" && (
          <Form.Field>
            <Checkbox label="Secondary" />
          </Form.Field>
        )}
        {props.nameItem === "Dropdown" && (
          <Form.Field>
            <Checkbox label="Selection" />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox label="Fitted" />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox label="Indeterminate" />
          </Form.Field>
        )}
        {(props.nameItem === "Input" ||
          props.nameItem === "NumberFormat" ||
          props.nameItem === "TextArea" ||
          props.nameItem === "Checkbox") && (
          <Form.Field>
            <Checkbox label="Read only" />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox label="Slider" />
          </Form.Field>
        )}
        {props.nameItem === "Checkbox" && (
          <Form.Field>
            <Checkbox label="Toggle" />
          </Form.Field>
        )}
      </Form.Group>
    </Form.Field>
  );
}

export default Options;
