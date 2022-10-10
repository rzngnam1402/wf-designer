import {
    GeneralLayout,
    Events,
    Other,
    Style,
    Tooltip,
} from "../TabProperties_component/TabProperties_CPN_JS";

function LayoutProperties({ nameTab }) {
    // Switch between nav controllers of table
    switch (nameTab) {
        case "General":
            return <GeneralLayout />;

        case "Style":
            return <Style />;

        case "Events":
            return <Events />;

        case "Tooltip":
            return <Tooltip />;

        case "Other":
            return <Other />;

        default:
            throw new Error();
    }
}

export default LayoutProperties;
