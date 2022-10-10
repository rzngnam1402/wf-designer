import { useState, useEffect } from "react";

import { Button } from "semantic-ui-react";

import $ from "jquery";

import "./App.css";

import Preview from "./components/form_builder/form_builder_JS/Preview";
import FormJson from "./components/form_builder/form_builder_JS/FormJson";
import FormBuilder from "./components/form_builder/form_builder_JS/formBuilder";
import FormJsonGenPro from "./components/form_builder/form_builder_JS/FormJson_GenPro";

function App() {
    const [render, setRender] = useState("");

    useEffect(() => {
        const switchPage = $(".switchPage");

        const formBuilder = $(".FormBuilder");
        const preview = $(".Preview");
        const formJson = $(".FormJson");
        const formJsonGenPro = $(".FormJsonGenPro");

        for (const ele of switchPage) {
            ele.classList.add("None_Display");
        }

        switch (render) {
            case "formBuilder":
                formBuilder[0].classList.remove("None_Display");
                formBuilder[0].classList.add("Display_Content");
                break;
            case "preview":
                preview[0].classList.remove("None_Display");
                preview[0].classList.add("Display_Content");
                break;
            case "formJson":
                formJson[0].classList.remove("None_Display");
                formJson[0].classList.add("Display_Content");
                break;
            case "formJsonGenPro":
                formJsonGenPro[0].classList.remove("None_Display");
                formJsonGenPro[0].classList.add("Display_Content");
                break;

            default:
                formBuilder[0].classList.remove("None_Display");
                formBuilder[0].classList.add("Display_Content");
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
                <Button
                    primary
                    onClick={() => {
                        setRender("formJsonGenPro");
                    }}
                >
                    FormJsonGenPro
                </Button>
            </div>
            <div className={"switchPage FormBuilder"}>
                <FormBuilder />
            </div>
            <div className={"switchPage Preview "}>
                <Preview />
            </div>
            <div className={"switchPage FormJson"}>
                <FormJson />
            </div>
            <div className={"switchPage FormJsonGenPro"}>
                <FormJsonGenPro />
            </div>
        </div>
    );
}

export default App;
