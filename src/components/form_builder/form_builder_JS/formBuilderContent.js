import { useState, useContext } from "react";

import "../form_builder_CSS/formBuilderContent.css";

import DropZone from "./dropZone";
import DropComponentUI from "./dropComponentUI";

import { ObjectTotalNode } from "../form_builder_Provider/idItemProvider";

function FormBuilderContent() {
  // ------------------------------------------------
  // Return the form builder on the left
  // ------------------------------------------------
  const TotalNode = useContext(ObjectTotalNode);

  return (
    <>
      <div className="formBuiderContent">
        {console.log("TotalNode.node_drop", TotalNode.node)}
        <DropZone level={1} birthOrder="0" first={true} />
        <DropComponentUI nodes={TotalNode.node} />
      </div>
    </>
  );
}

export default FormBuilderContent;
