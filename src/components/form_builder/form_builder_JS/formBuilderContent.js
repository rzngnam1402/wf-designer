import { useState } from "react";

import { useSelector } from "react-redux";

import "../form_builder_CSS/formBuilderContent.css";

import DropZone from "./dropZone";
import DropComponentUI from "./dropComponentUI";

// import { ObjectTotalNode } from "../form_builder_Provider/idItemProvider";

function FormBuilderContent() {
  // ------------------------------------------------
  // Return the form builder on the left
  // ------------------------------------------------
  const totalNode = useSelector((state) => state.totalNode.value);

  return (
    <>
      <div className="formBuiderContent">
        <DropZone level={1} birthOrder="0" first={true} />
        <DropComponentUI nodes={totalNode} />
      </div>
    </>
  );
}

export default FormBuilderContent;
