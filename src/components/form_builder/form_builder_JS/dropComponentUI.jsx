import ItemContent from "./ItemContent";

import "../form_builder_CSS/dropComponentUI.css";

function DropComponentUI({ nodes, preview, birthOrderUI }) {
    return (
        <>
            {nodes &&
                nodes.map((objectNode) => {
                    return (
                        <div
                            key={objectNode.dopzoneCurrent.birthOrder}
                            className={preview ? "preview_item" : ""}
                        >
                            <ItemContent
                                level={objectNode.dopzoneCurrent.level}
                                birthOrder={
                                    objectNode.dopzoneCurrent.birthOrder
                                }
                                id={objectNode.idName}
                                children={objectNode.children}
                                preview={preview}
                            />
                        </div>
                    );
                })}
        </>
    );
}

export default DropComponentUI;
