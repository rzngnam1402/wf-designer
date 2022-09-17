import { useContext } from "react";
import DropComponentUI from "./dropComponentUI";
import { ObjectTotalNode } from "../form_builder_Provider/idItemProvider";

function FormJson() {
  const TotalNode = useContext(ObjectTotalNode);

  return (
    <>
      <div>
        <h1>Day la FormJson</h1>
      </div>
      <div>
        <pre>{JSON.stringify(TotalNode.node, null, 2)}</pre>
      </div>
    </>
  );
}

export default FormJson;
