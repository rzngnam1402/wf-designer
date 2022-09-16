import { useState, useContext } from "react";

import DropZone from "./dropZone";
import "../form_builder_CSS/formBuilderContent.css";
import DropComponentUI from "./dropComponentUI";

import { ObjectTotalNode } from "../form_builder_Provider/idItemProvider";

function FormBuilderContent() {
  // ------------------------------------------------
  // Return the form builder on the left
  // ------------------------------------------------
  const TotalNode = useContext(ObjectTotalNode);

  return (
    <>
      <div className="formBuiderContent_Container">
        {console.log("TotalNode.node_drop", TotalNode.node)}
        <DropZone level={1} birthOrder="0" first={true} />
        <DropComponentUI nodes={TotalNode.node} />
      </div>
    </>
  );
}

export default FormBuilderContent;
