import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { IdItemProvider } from "./components/form_builder/form_builder_Provider/idItemProvider";
import { ModalProperties } from "./components/form_builder/form_builder_Provider/idItemProvider";
import { SetOderNumber } from "./components/form_builder/form_builder_Provider/idItemProvider";
import { SetItemDelete } from "./components/form_builder/form_builder_Provider/idItemProvider";

import "@fortawesome/fontawesome-free/css/all.min.css";
//  Import FontAwesome 5
import "semantic-ui-css/semantic.min.css";
// Import Semantic UI React

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <IdItemProvider>
    <ModalProperties>
      <SetOderNumber>
        <SetItemDelete>
          <App />
        </SetItemDelete>
      </SetOderNumber>
    </ModalProperties>
  </IdItemProvider>
  // </React.StrictMode>
);
