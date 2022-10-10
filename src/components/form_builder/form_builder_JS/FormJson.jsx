import { useSelector } from "react-redux";

function FormJson() {
  const totalNode = useSelector((state) => state.totalNode.value);

  return (
    <>
      <div>
        <h1>Day la FormJson</h1>
      </div>
      <div>
        <pre>{JSON.stringify(totalNode, null, 2)}</pre>
      </div>
    </>
  );
}

export default FormJson;
