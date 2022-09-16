import { useContext } from "react";

import "../TableStructure_CSS/toolBarHeader.css";
import { checkModal } from "../../form_builder_Provider/idItemProvider";
// import { itemDelete } from "../../form_builder_Provider/idItemProvider";
import { itemToolboxGeneral } from "../../form_builder_Provider/idItemProvider";

function ToolBarHeader(props) {
  // render toolbar of each component inside form is properties modifier
  const ModifiedProperties = useContext(checkModal);
  // const ItemDelete = useContext(itemDelete);
  const ToolboxGeneral = useContext(itemToolboxGeneral);

  // const orderNumber = props.orderNumber;
  // const DeleteST = () => {
  //   ItemDelete.SetValueOrder(orderNumber);
  // };

  return (
    <div className="toolBarHeader_container">
      <div className="toolBarHeader_title">{props.nameItemToolbox}</div>
      <i className="fa-solid fa-maximize"></i>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          ModifiedProperties.setValueToggleModal({
            check: true,
            nameItem: props.nameItemToolbox,
          });
          ToolboxGeneral.SetValueNameToolbox(props.nameItemToolbox);
        }}
      ></i>
      <i className="fa-solid fa-copy"></i>
      <i className="fa-solid fa-trash-can"></i>
    </div>
  );
}

export default ToolBarHeader;
