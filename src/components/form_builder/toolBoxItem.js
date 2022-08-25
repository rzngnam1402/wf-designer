import { handleDragEnd, handleDragStart } from "./DragAndDrop";

function ToolBoxItem({ listItem }) {
    console.log(listItem);
    return (
        <>
            {
                listItem.map((item) => {
                    return (
                        < li
                            key={item.id}
                            className="toolBox_item"
                            draggable
                            onDragStart={(e) => (handleDragStart(e, item.id))}
                            onDragEnd={(e) => (handleDragEnd(e))}
                        > {item.content}</li>
                    )

                })

            }
        </>
    )
}

export default ToolBoxItem