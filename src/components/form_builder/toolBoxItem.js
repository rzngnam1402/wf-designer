
import { handleDragEnd, handleDragStart } from "./DragAndDrop";
import { IdItemInsertContext } from "./idItemProder";
import { useContext } from "react";

function ToolBoxItem({ listItem }) {
    // ----------------------
    // Return Item in ToolBox 
    // with attribute: draggable, 
    // event: "dragStart, dragEnd"
    // -----------------------
    const ItemBoxContent = useContext(IdItemInsertContext)

    return (
        <>
            {
                listItem.map((item) => {
                    return (
                        < li
                            key={item.id}
                            className="toolBox_item"
                            draggable
                            onDragStart={
                                (e) => {
                                    handleDragStart(e)
                                    ItemBoxContent.setValueId(item.id)
                                }
                            }
                            onDragEnd={
                                (e) => {
                                    handleDragEnd(e)
                                    ItemBoxContent.setValueId('')
                                }
                            }
                        > {item.content}</li>
                    )

                })

            }
        </>
    )
}

export default ToolBoxItem