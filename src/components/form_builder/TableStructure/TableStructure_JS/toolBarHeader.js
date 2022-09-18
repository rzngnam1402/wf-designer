import { useContext } from "react";

import "../TableStructure_CSS/toolBarHeader.css";
import { checkModal } from "../../form_builder_Provider/idItemProvider";
import { itemToolboxGeneral } from "../../form_builder_Provider/idItemProvider";
import { ObjectTotalNode } from "../../form_builder_Provider/idItemProvider";
import { OderNumberitemDrop } from "../../form_builder_Provider/idItemProvider";

function ToolBarHeader(props) {
  // --------------------------------------------------------------------
  // render toolbar of each component inside form is properties modifier
  // --------------------------------------------------------------------
  const ModifiedProperties = useContext(checkModal);
  const TotalNode = useContext(ObjectTotalNode);
  const ToolboxGeneral = useContext(itemToolboxGeneral);
  const orderNumberItem = useContext(OderNumberitemDrop);

  const deleteObject = (array, birth, level) => {
    let indexNode = 0;

    array.forEach((ele) => {
      indexNode++;

      // Neu tim ra Object
      if (ele.dopzoneCurrent.birthOrder === birth) {
        return array.splice(indexNode - 1, 1);
      } else {
        if (ele.children !== []) {
          if (level > ele.dopzoneCurrent.level) {
            ele.children = deleteObject(ele.children, birth, level);
          }
        }
      }
    });
    return array;
  };

  const copyObject = (array, birth, level) => {
    let indexNode = 0;

    array.forEach((ele) => {
      indexNode++;

      // Neu tim ra Object
      if (ele.dopzoneCurrent.birthOrder === birth) {
        let OrderDropzoneBorn =
          orderNumberItem.order + ele.dopzoneCurrent.dropChild;
        orderNumberItem.IncreaseValueOrder(OrderDropzoneBorn);
        const eleInsert = {
          idParent: ele.idParent,
          idName: ele.idName,
          children: [],
          dopzoneCurrent: {
            level: ele.dopzoneCurrent.level,
            birthOrder: OrderDropzoneBorn,
            dropChild: ele.dopzoneCurrent.dropChild,
          },
        };

        return array.splice(indexNode, 0, eleInsert);
      } else {
        if (ele.children !== []) {
          if (level > ele.dopzoneCurrent.level) {
            ele.children = copyObject(ele.children, birth, level);
          }
        }
      }
    });
    return array;
  };

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
      <i
        className="fa-solid fa-copy"
        onClick={() => {
          TotalNode.SetObjectNodeInsert([
            ...copyObject(TotalNode.node, props.orderNumber, props.level),
          ]);
        }}
      ></i>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => {
          TotalNode.SetObjectNodeInsert([
            ...deleteObject(TotalNode.node, props.orderNumber, props.level),
          ]);
        }}
      ></i>
    </div>
  );
}

export default ToolBarHeader;
