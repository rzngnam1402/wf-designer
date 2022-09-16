import ItemContent from "./ItemContent";

function DropComponentUI({ nodes }) {
  return (
    <>
      {console.log("TotalNode.node", nodes)}
      {nodes.map((objectNode) => {
        return (
          <div key={objectNode.dopzoneCurrent.birthOrder}>
            <ItemContent
              level={objectNode.dopzoneCurrent.level}
              birthOrder={objectNode.dopzoneCurrent.birthOrder}
              id={objectNode.idName}
              children={objectNode.children}
            />
          </div>
        );
      })}
    </>
  );
}

export default DropComponentUI;
