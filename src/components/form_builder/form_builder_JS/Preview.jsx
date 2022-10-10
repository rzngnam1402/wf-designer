import { useSelector } from "react-redux";

import "../form_builder_CSS/Preview.css";

import DropComponentUI from "./dropComponentUI";

function Preview() {
  const totalNode = useSelector((state) => state.totalNode.value);

  return (
    <>
      <div className="titlePreview">
        <h1>Preview</h1>
      </div>
      <div className="bodyPreview">
        <DropComponentUI nodes={totalNode} preview={true} />
      </div>
    </>
  );
}

export default Preview;
