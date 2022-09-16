import $ from "jquery";
import { useRef } from "react";
import { Button } from "semantic-ui-react";

function Preview() {
  //   const [pre, setPre] = useState(false);
  console.log();

  const handleClick = () => {
    let jquery_var = $(".formBuiderContent_Container");
    console.log(jquery_var[0].outerHTML);
  };

  return (
    <>
      <div>
        <h1>Day la Preview</h1>
      </div>
      <div>
        <span onClick={handleClick}>
          <Button>Preview</Button>
        </span>
        {/* <div>{JSON.stringify(view)}</div> */}
      </div>
    </>
  );
}

export default Preview;
