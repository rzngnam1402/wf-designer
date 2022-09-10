import { useState, useEffect, useContext } from "react";

import "../form_builder_CSS/dropZone.css";
import { handleDragLeave, handleDragOver } from "./DragAndDrop";
import ItemContent from "./ItemContent";

import { IdItemInsertContext } from "../form_builder_Provider/idItemProvider";
import { OderNumberitemDrop } from "../form_builder_Provider/idItemProvider";
import { itemDelete } from "../form_builder_Provider/idItemProvider";

function DropZone() {
  // --------------------------------------------------------
  // Return Dropzone where can drop itemBox component
  // -------------------------------------------------------

  const [checkDrop, setCheckDrop] = useState();
  const [checkOver, setCheckOver] = useState();
  const [idNodeInsert, setIdNodeInsert] = useState([]);

  const DropZoneContent = useContext(IdItemInsertContext);
  const orderNumberItem = useContext(OderNumberitemDrop);
  const ItemDelete = useContext(itemDelete);

  useEffect(() => {
    let check = checkDrop === checkOver && checkDrop !== undefined;

    check &&
      setIdNodeInsert((prev) => {
        setCheckDrop("");
        return [
          { id: DropZoneContent.id, orderNumber: orderNumberItem.order },
          ...prev,
        ];
      });
    console.log("Effect 1", idNodeInsert);
    console.log(ItemDelete.order);

    if (!check && ItemDelete.order !== 0) {
      console.log("Effect 2", idNodeInsert);
      for (var i = 0; i < idNodeInsert.length; i++) {
        if (idNodeInsert[i].orderNumber == ItemDelete.order) {
          idNodeInsert.splice(i, 1);
          ItemDelete.SetValueOrder(0);
          break;
        }
      }
    }

    return () =>
      checkDrop === checkOver &&
      checkDrop !== undefined &&
      orderNumberItem.IncreaseValueOrder();
  }, [checkDrop, ItemDelete.order]);

  return (
    <>
      {console.log("Handle")}
      <div
        className={"dropZone notDrag"}
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
          <ItemContent
            key={index}
            id={node.id}
            orderNumber={node.orderNumber}
            name={index}
          />
        );
      })}
    </>
  );
}

export default DropZone;
