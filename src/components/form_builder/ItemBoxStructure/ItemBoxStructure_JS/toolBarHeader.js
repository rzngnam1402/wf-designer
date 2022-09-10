import { useContext } from "react";

import "../ItemBoxStructure_CSS/toolBarHeader.css";
import { checkModal } from "../../form_builder_Provider/idItemProvider";
import { itemDelete } from "../../form_builder_Provider/idItemProvider";

function ToolBarHeader(props) {
  const ModifiedProperties = useContext(checkModal);
  const ItemDelete = useContext(itemDelete);

  const DeleteST = () => {
    console.log("Click Trash");
    ItemDelete.SetValueOrder(orderNumber);
  };

  const orderNumber = props.orderNumber;

  return (
    <div className="toolBarHeader_container">
      <div className="toolBarHeader_title">container_1</div>
      <i className="fa-solid fa-maximize"></i>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          ModifiedProperties.setValueToggleModal(true);
        }}
      ></i>
      <i className="fa-solid fa-copy"></i>
      <i className="fa-solid fa-trash-can" onClick={DeleteST}></i>
    </div>
  );
}

export default ToolBarHeader;
