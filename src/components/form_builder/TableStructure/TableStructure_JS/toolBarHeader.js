import { useSelector, useDispatch } from "react-redux";

import "../TableStructure_CSS/toolBarHeader.css";

import { updateModal } from "../../../../features/builder/CheckModal.js";
import { updateSave } from "../../../../features/builder/ButtonSave.js";
import { updateitemTBGeneral } from "../../../../features/builder/ItemToolboxGeneral.js";
import { updateNode } from "../../../features/builder/ObjectTotalNode.js";
import { incrementDropzone } from "../../../features/builder/ONDropzoneBorn.js";

function ToolBarHeader(props) {
  // --------------------------------------------------------------------
  // render toolbar of each component inside form is properties modifier
  // --------------------------------------------------------------------
  const dispatch = useDispatch();

  const CheckOpen = useSelector((state) => state.checkModal.value);
  // const checkSave = useSelector((state) => state.btnSave.value);
  const itemTBGen = useSelector((state) => state.itemTBGeneral.value);
  const dropzoneBorn = useSelector((state) => state.dropzoneBorn.value);
  const totalNode = useSelector((state) => state.totalNode.value);

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
        let OrderDropzoneBorn = dropzoneBorn + ele.dopzoneCurrent.dropChild;
        dispatch(incrementDropzone(OrderDropzoneBorn));
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
          dispatch(
            updateModal({
              check: true,
              nameItem: props.nameItemToolbox,
              orderBirth: props.orderNumber,
              level: props.level,
            })
          );

          dispatch(updateitemTBGeneral(props.nameItemToolbox));
        }}
      ></i>
      <i
        className="fa-solid fa-copy"
        onClick={() => {
          dispatch(
            updateNode([
              ...copyObject(totalNode, props.orderNumber, props.level),
            ])
          );
        }}
      ></i>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => {
          dispatch(
            updateNode([
              ...deleteObject(totalNode, props.orderNumber, props.level),
            ])
          );
        }}
      ></i>
    </div>
  );
}

export default ToolBarHeader;
