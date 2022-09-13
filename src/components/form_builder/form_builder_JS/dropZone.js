import { useState, useEffect, useContext } from "react";

import "../form_builder_CSS/dropZone.css";
import { handleDragLeave, handleDragOver } from "./DragAndDrop";
import ItemContent from "./ItemContent";
import DropAddition from "./dropAddition";

import { IdItemInsertContext } from "../form_builder_Provider/idItemProvider";
import { OderNumberitemDrop } from "../form_builder_Provider/idItemProvider";
import { itemDelete } from "../form_builder_Provider/idItemProvider";

function DropZone(props) {
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

    if (check) {
      setIdNodeInsert((prev) => {
        setCheckDrop("");

        return [
          { id: DropZoneContent.id, orderNumber: orderNumberItem.order },
          ...prev,
        ];
      });
    } else {
      for (var i = 0; i < idNodeInsert.length; i++) {
        if (idNodeInsert[i].orderNumber === ItemDelete.order) {
          console.log("Tham so i sap xoa = ", i);
          console.log("Length array truoc khi xoa  = ", idNodeInsert.length);
          console.log("Item delete se xoa = ", ItemDelete.order);
          console.log(
            "Array chua toan bo item trong dropzone = ",
            idNodeInsert
          );
          console.log("Bat dau xoa");
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
            />
            <DropAddition id={node.id} />
          </div>
        );
      })}
    </>
  );
}

export default DropZone;
