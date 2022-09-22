import { useSelector } from "react-redux";

function FormJsonGenPro() {
  const allGenPro = useSelector((state) => state.allGenPro.value);

  return (
    <>
      <div>
        <h1>Day la FormJson General Properties</h1>
      </div>
      <div>
        <pre>{JSON.stringify(allGenPro, null, 2)}</pre>
      </div>
    </>
  );
}

export default FormJsonGenPro;
