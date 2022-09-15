import DropZone from "./dropZone";
import "../form_builder_CSS/dropZoneVs2.css";

function DropAddition(props) {
  return (
    <DropZone
      class={props.ident === "-1" ? "DisplayNone" : ""}
      id={props.id}
      relationship={props.relationship}
    />
  );
}

export default DropAddition;
