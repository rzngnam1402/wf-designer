import Attached from "../General_component/General_component_JS/Attached";
import ChildrenContainerView from "../General_component/General_component_JS/ChildrenContainerView";
import Content from "../General_component/General_component_JS/Content";
import Data from "../General_component/General_component_JS/Data";
import FileProperties from "../General_component/General_component_JS/FileProperties";
import Floated from "../General_component/General_component_JS/Floated";
import Format from "../General_component/General_component_JS/Format";
import GroupDirection from "../General_component/General_component_JS/GroupDirection";
import Icon from "../General_component/General_component_JS/Icon";
import IconFileTypes from "../General_component/General_component_JS/IconFileTypes";
import IdField from "../General_component/General_component_JS/IdField";
import Label from "../General_component/General_component_JS/Label";
import LabelPosition from "../General_component/General_component_JS/LabelPosition";
import Mark from "../General_component/General_component_JS/Mark";
import Name from "../General_component/General_component_JS/Name";
import Options from "../General_component/General_component_JS/Options";
import Placeholder from "../General_component/General_component_JS/Placeholder";
import Prefix from "../General_component/General_component_JS/Prefix";
import Rows from "../General_component/General_component_JS/Rows";
import Size from "../General_component/General_component_JS/Size";
import Subheader from "../General_component/General_component_JS/Subheader";
import Suffix from "../General_component/General_component_JS/Suffix";
import TextAlign from "../General_component/General_component_JS/TextAlign";
import Type from "../General_component/General_component_JS/Type";

function ChooseProperties(nameComponent, index, nameItem) {
  // -------------------------------------------------------------
  // Choose properties follow nameItem of each attribute
  // -------------------------------------------------------------

  switch (nameComponent) {
    case "Attached":
      return <Attached key={index} keyId={nameComponent} />;
    case "ChildrenContainerView":
      return <ChildrenContainerView key={index} keyId={nameComponent} />;
    case "Content":
      return <Content key={index} keyId={nameComponent} />;
    case "Data ":
      return <Data key={index} keyId={nameComponent} />;
    case "FileProperties":
      return <FileProperties key={index} keyId={nameComponent} />;
    case "Floated":
      return <Floated key={index} keyId={nameComponent} />;
    case "Format":
      return <Format key={index} keyId={nameComponent} />;
    case "GroupDirection":
      return <GroupDirection key={index} keyId={nameComponent} />;
    case "Icon":
      return <Icon key={index} keyId={nameComponent} />;
    case "IconFileTypes":
      return <IconFileTypes key={index} keyId={nameComponent} />;
    case "IdField":
      return <IdField key={index} keyId={nameComponent} />;
    case "Label":
      return <Label key={index} keyId={nameComponent} />;
    case "LabelPosition":
      return <LabelPosition key={index} keyId={nameComponent} />;
    case "Mark":
      return <Mark key={index} keyId={nameComponent} />;
    case "Name":
      return <Name key={index} keyId={nameComponent} />;
    case "Options":
      return <Options key={index} keyId={nameComponent} nameItem={nameItem} />;
    case "Placeholder":
      return <Placeholder key={index} keyId={nameComponent} />;
    case "Prefix":
      return <Prefix key={index} keyId={nameComponent} />;
    case "Rows":
      return <Rows key={index} keyId={nameComponent} />;
    case "Size":
      return <Size key={index} keyId={nameComponent} />;
    case "Subheader":
      return <Subheader key={index} keyId={nameComponent} />;
    case "Suffix":
      return <Suffix key={index} keyId={nameComponent} />;
    case "TextAlign":
      return <TextAlign key={index} keyId={nameComponent} />;
    case "Type":
      return <Type key={index} keyId={nameComponent} />;
    default:
      return <div key={index}>Khong tim thay phan tu Content</div>;
  }
}

export default ChooseProperties;
