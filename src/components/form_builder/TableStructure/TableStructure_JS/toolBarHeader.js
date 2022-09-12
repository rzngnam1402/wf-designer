import { useContext } from "react";

import "../TableStructure_CSS/toolBarHeader.css";
import { checkModal } from "../../form_builder_Provider/idItemProvider";
import { itemDelete } from "../../form_builder_Provider/idItemProvider";
import { itemToolboxGeneral } from "../../form_builder_Provider/idItemProvider";

function ToolBarHeader(props) {
  // render toolbar of each component inside form is properties modifier
  const ModifiedProperties = useContext(checkModal);
  const ItemDelete = useContext(itemDelete);
  const ToolboxGeneral = useContext(itemToolboxGeneral);

  const DeleteST = () => {
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
          ToolboxGeneral.SetValueNameToolbox(props.nameItemToolbox);
        }}
      ></i>
      <i className="fa-solid fa-copy"></i>
      <i className="fa-solid fa-trash-can" onClick={DeleteST}></i>
    </div>
  );
}

export default ToolBarHeader;
