import ItemContent from "./ItemContent";

function DropComponentUI({ nodes, preview }) {
  console.log("node checking", nodes);
  return (
    <>
      {nodes.map((objectNode) => {
        return (
          <div key={objectNode.dopzoneCurrent.birthOrder}>
            <ItemContent
              level={objectNode.dopzoneCurrent.level}
              birthOrder={objectNode.dopzoneCurrent.birthOrder}
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
