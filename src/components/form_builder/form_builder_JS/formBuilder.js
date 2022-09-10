import "../form_builder_CSS/formBuilder.css";
import FormBuilderContent from "./formBuilderContent";
import ToolBox from "./toolBox";

import ModalExampleDimmer from "../ItemBoxStructure/ItemBoxStructure_JS/Modal";

function FormBuilder() {
  // -----------------------------------------------------------
  // This is main component of formBuilder include child component
  // -----------------------------------------------------------
  return (
    <>
      <div className="FormBuilderContainer">
        <div>
          <FormBuilderContent />
        </div>
        <ToolBox />
      </div>
      <div className="Test">
        <ModalExampleDimmer />
      </div>
    </>
  );
}

export default FormBuilder;
