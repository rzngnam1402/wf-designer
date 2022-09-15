import DropZone from "./dropZone";
import "../form_builder_CSS/formBuilderContent.css";

function FormBuilderContent() {
  // ------------------------------------------------
  // Return the form builder on the left
  // ------------------------------------------------
  console.log(<DropZone />);

  return (
    <div className="formBuiderContent_Container">
      <DropZone />
    </div>
  );
}

export default FormBuilderContent;
