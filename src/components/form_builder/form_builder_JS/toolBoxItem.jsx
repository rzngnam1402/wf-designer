import { useSelector, useDispatch } from "react-redux";

import { updateIdItem } from "../../../features/builder/IdItemInsert.js";

function ToolBoxItem({ listItem }) {
  // ----------------------
  // Return Item in ToolBox
  // with attribute: draggable,
  // event: "dragStart, dragEnd"
  // HandleDragStart: handle event: Drag Start
  // HandleDragEnd: handle event: Drag End
  // -----------------------
  const dispatch = useDispatch();

  const handleDragStart = () => {
    const dropZones = [...document.getElementsByClassName("dropZone")];
    dropZones.forEach((dropZone) => {
      dropZone.classList.add("dragStart");
    });
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    const dropZones = [...document.getElementsByClassName("dropZone")];
    dropZones.forEach((dropZone) => {
      dropZone.classList.remove("dragOver");
      dropZone.classList.remove("dragStart");
    });
  };

  return (
    <>
      {listItem.map((item) => {
        return (
          <li
            key={item.id}
            className="toolBox_item"
            draggable
            onDragStart={() => {
              handleDragStart();
              dispatch(updateIdItem(item.id));
            }}
            onDragEnd={(e) => {
              handleDragEnd(e);
              dispatch(updateIdItem(""));
            }}
          >
            {item.content}
          </li>
        );
      })}
    </>
  );
}

export default ToolBoxItem;
