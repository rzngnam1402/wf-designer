import FormBuilder from "./components/form_builder/form_builder_JS/formBuilder";
import Preview from "./components/form_builder/form_builder_JS/Preview";
import { Button } from "semantic-ui-react";
import $ from "jquery";

import FormJson from "./components/form_builder/form_builder_JS/FormJson";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [render, setRender] = useState("");

  useEffect(() => {
    const formBuilder = $(".FormBuilder");
    const preview = $(".Preview");
    const formJson = $(".FormJson");

    switch (render) {
      case "formBuilder":
        formBuilder[0].classList.remove("None_Display");
        preview[0].classList.add("None_Display");
        formJson[0].classList.add("None_Display");
        formBuilder[0].classList.add("Display_Content");
        break;
      case "preview":
        formBuilder[0].classList.add("None_Display");
        preview[0].classList.remove("None_Display");
        formJson[0].classList.add("None_Display");
        preview[0].classList.add("Display_Content");
        break;
      case "formJson":
        formBuilder[0].classList.add("None_Display");
        preview[0].classList.add("None_Display");
        formJson[0].classList.remove("None_Display");
        formJson[0].classList.add("Display_Content");
        break;

      default:
        break;
    }
  }, [render]);

  return (
    <div>
      <div className="Button_Router">
        <Button
          primary
          onClick={() => {
            setRender("formBuilder");
          }}
        >
          FormBuilder
        </Button>
        <Button
          primary
          onClick={() => {
            setRender("preview");
          }}
        >
          Preview
        </Button>
        <Button
          primary
          onClick={() => {
            setRender("formJson");
          }}
        >
          FormJson
        </Button>
      </div>
      <div className={"FormBuilder Display_Content"}>
        <FormBuilder />
      </div>
      <div className={"Preview None_Display"}>
        <Preview />
      </div>
      <div className={"FormJson None_Display"}>
        <FormJson />
      </div>
    </div>
  );
}

export default App;
