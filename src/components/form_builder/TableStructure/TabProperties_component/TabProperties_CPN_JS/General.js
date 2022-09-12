import { Form } from "semantic-ui-react";

import "../TabProperties_CPN_CSS/General.css";

import ChooseProperties from "./GeneralChoosePro";

function General(props) {
  // render general properties of total component
  const ComponentsForm = Object.entries(props);

  console.log(ComponentsForm);

  return (
    <Form>
      <div className="form_grid">
        <Form.Field>
          {ComponentsForm.map((component, index) => {
            console.log("Choose component", component[0], component[1]);
            return (
              component[1].render &&
              component[1].float === "left" &&
              ChooseProperties(component[0], index, component[1].nameItem)
            );
          })}
        </Form.Field>
        <Form.Field>
          {ComponentsForm.map((component, index) => {
            console.log("Choose component", component[0], component[1]);
            return (
              component[1].render &&
              component[1].float === "right" &&
              ChooseProperties(component[0], index, component[1].nameItem)
            );
          })}
        </Form.Field>
      </div>
      <Form.Field>
        {ComponentsForm.map((component, index) => {
          console.log("Choose component", component[0], component[1]);
          return (
            component[1].render &&
            component[1].float === "none" &&
            ChooseProperties(component[0], index, component[1].nameItem)
          );
        })}
      </Form.Field>
    </Form>
  );
}

export default General;
