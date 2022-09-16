import { useState, useEffect, useContext } from "react";

import "../form_builder_CSS/dropZone.css";
import { handleDragLeave, handleDragOver } from "./DragAndDrop";
import ItemContent from "./ItemContent";
import DropAddition from "./dropAddition";

import { IdItemInsertContext } from "../form_builder_Provider/idItemProvider";
import { OderNumberitemDrop } from "../form_builder_Provider/idItemProvider";
import { itemDelete } from "../form_builder_Provider/idItemProvider";
import { ObjectTotalNode } from "../form_builder_Provider/idItemProvider";
import { CheckChild } from "../form_builder_Provider/idItemProvider";

function DropZone(props) {
  // --------------------------------------------------------
  // Return Dropzone where can drop itemBox component
  // -------------------------------------------------------

  const [checkDrop, setCheckDrop] = useState();
  const [checkOver, setCheckOver] = useState();
  const [idNodeInsert, setIdNodeInsert] = useState([]);
  const [objectNodeCurrent, setObjectNodeCurrent] = useState({
    idParent: "",
    id: "",
    name: "",
    child: [],
  });

  const DropZoneContent = useContext(IdItemInsertContext);
  const orderNumberItem = useContext(OderNumberitemDrop);
  const ItemDelete = useContext(itemDelete);
  const TotalNode = useContext(ObjectTotalNode);
  const Child = useContext(CheckChild);

  // useEffect(() => {
  //   if (Child.checkChild === true) {
  //     setObjectNodeCurrent();
  //   }
  // }, [CheckChild.checkChild]);

  useEffect(() => {
    let check = checkDrop === checkOver && checkDrop !== undefined;

    if (check) {
      setIdNodeInsert((prev) => {
        setCheckDrop("");

        return [
          { id: DropZoneContent.id, orderNumber: orderNumberItem.order },
          ...prev,
        ];
      });

      // Create object current node
      // setObjectNodeCurrent((prev) => ({ ...prev, name: DropZoneContent.id }));
      // if (props.id && props.relationship) {
      //   if (props.relationship === "Child") {
      //     setObjectNodeCurrent((prev) => ({
      //       ...prev,
      //       idParent: props.id,
      //     }));
      // o ben duoi array mac dinh la thanh phan cha

      // can phai sua props.id ben duoi thanh ObjectNodeCurrent.idParent
      // for (const ele of arrays) {
      //   if ((ele[id] = props.id)) {
      //     setObjectNodeCurrent((prev) => ({
      //       ...prev,
      //       id: `${ele[id]}_${ele[child].length}`,
      //     }));

      //     ObjectTotalNode.SetObjectNodeInsert((prev) => [
      //       objectNodeCurrent,
      //       ...prev,
      //     ]);
      //     break;
      //   }
      // }
      // } else if (props.relationship === "Brother") {
      // for (const ele of arrays) {
      //   if ((ele[id] = props.id)) {
      //     setObjectNodeCurrent((prev) => ({
      //       ...prev,
      //       id: `${ele[id]}_${arrays.length}`,
      //     }));
      //     ObjectTotalNode.SetObjectNodeInsert((prev) => [
      //       objectNodeCurrent,
      //       ...prev,
      //     ]);
      //     break;
      //   }
      // }
      // }
      // } else {
      //   setObjectNodeCurrent((prev) => ({
      //     ...prev,
      //     id: ObjectTotalNode.nodeCurrent.length,
      //   }));

      //   ObjectTotalNode.SetObjectNodeInsert((prev) => [
      //     objectNodeCurrent,
      //     ...prev,
      //   ]);
      // }
      // Complete handle function
    } else {
      for (var i = 0; i < idNodeInsert.length; i++) {
        if (idNodeInsert[i].orderNumber === ItemDelete.order) {
          idNodeInsert.splice(i, 1, { id: "-1", orderNumber: "-1" });
          break;
        }
      }

      ItemDelete.SetValueOrder(0);
    }

    return () =>
      checkDrop === checkOver &&
      checkDrop !== undefined &&
      orderNumberItem.IncreaseValueOrder();
  }, [checkDrop, ItemDelete.order]);

  return (
    <>
      {console.log("Re-Render: ", idNodeInsert)}
      <div
        className={`dropZone notDrag ${props.class}`}
        onDragOver={(e) => {
          handleDragOver(e);
          setCheckOver(e.target);
        }}
        onDrop={(e) => {
          setCheckDrop(e.target);
        }}
        onDragLeave={(e) => {
          handleDragLeave(e);
          setCheckOver("");
        }}
      >
        DROP ZONE
      </div>
      {idNodeInsert.map((node, index) => {
        return (
          <div key={index}>
            <ItemContent
              id={node.id}
              orderNumber={node.orderNumber}
              name={index}
              idDrop={objectNodeCurrent.id}
              relationship="Child"
            />
            <DropAddition
              ident={node.id}
              id={objectNodeCurrent.id}
              relationship="Brother"
            />
          </div>
        );
      })}
    </>
  );
}

export default DropZone;
