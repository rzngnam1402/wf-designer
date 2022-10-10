import React from "react";
import ReactDOM from "react-dom/client";

// redux
import { Provider } from "react-redux";
import store from "./app/store";

// Globalstyles
import GlobalStyles from "./components/GlobalStyles";

// CSS
import "./index.css";

import App from "./App";

import "@fortawesome/fontawesome-free/css/all.min.css";
//  Import FontAwesome 5
import "semantic-ui-css/semantic.min.css";
// Import Semantic UI React

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GlobalStyles>
        <Provider store={store}>
            <App />
        </Provider>
    </GlobalStyles>
);
