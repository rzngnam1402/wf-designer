import { useSelector } from "react-redux";

import DropComponentUI from "./dropComponentUI";

function Preview() {
  const totalNode = useSelector((state) => state.totalNode.value);

  return (
    <>
      <div>
        <h1>Day la Preview</h1>
      </div>
      <div>
        <DropComponentUI nodes={totalNode} preview={true} />
      </div>
    </>
  );
}

export default Preview;
