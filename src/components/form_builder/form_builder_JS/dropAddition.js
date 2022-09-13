import DropZone from "./dropZone";
import "../form_builder_CSS/dropZoneVs2.css";

function DropAddition(props) {
  return <DropZone class={props.id === "-1" ? "DisplayNone" : ""} />;
}

export default DropAddition;
