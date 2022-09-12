import GeneralLayout from "../TabProperties_component/TabProperties_CPN_JS/GeneralLayout";
import Events from "../TabProperties_component/TabProperties_CPN_JS/Events";
import Other from "../TabProperties_component/TabProperties_CPN_JS/Other";
import Style from "../TabProperties_component/TabProperties_CPN_JS/Style";
import Tooltip from "../TabProperties_component/TabProperties_CPN_JS/Tooltip";

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
