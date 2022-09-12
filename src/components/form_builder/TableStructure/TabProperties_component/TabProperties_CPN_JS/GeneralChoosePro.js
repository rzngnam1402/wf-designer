import Attached from "../General_component/General_component_JS/Attached";
import ChildrenContainerView from "../General_component/General_component_JS/ChildrenContainerView";
import Content from "../General_component/General_component_JS/Content";
import Data from "../General_component/General_component_JS/Data";
import Display from "../General_component/General_component_JS/Display";
import FileProperties from "../General_component/General_component_JS/FileProperties";
import Float from "../General_component/General_component_JS/Float";
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
  switch (nameComponent) {
    case "Attached":
      return <Attached key={index} />;
    case "ChildrenContainerView":
      return <ChildrenContainerView key={index} />;
    case "Content":
      return <Content key={index} />;
    case "Data ":
      return <Data key={index} />;
    case "Display":
      return <Display key={index} />;
    case "FileProperties":
      return <FileProperties key={index} />;
    case "Float":
      return <Float key={index} />;
    case "Floated":
      return <Floated key={index} />;
    case "Format":
      return <Format key={index} />;
    case "GroupDirection":
      return <GroupDirection key={index} />;
    case "Icon":
      return <Icon key={index} />;
    case "IconFileTypes":
      return <IconFileTypes key={index} />;
    case "IdField":
      return <IdField key={index} />;
    case "Label":
      return <Label key={index} />;
    case "LabelPosition":
      return <LabelPosition key={index} />;
    case "Mark":
      return <Mark key={index} />;
    case "Name":
      return <Name key={index} />;
    case "Options":
      return <Options key={index} nameItem={nameItem} />;
    case "Placeholder":
      return <Placeholder key={index} />;
    case "Prefix":
      return <Prefix key={index} />;
    case "Rows":
      return <Rows key={index} />;
    case "Size":
      return <Size key={index} />;
    case "Subheader":
      return <Subheader key={index} />;
    case "Suffix":
      return <Suffix key={index} />;
    case "TextAlign":
      return <TextAlign key={index} />;
    case "Type":
      return <Type key={index} />;
    default:
      return <div key={index}>Khong tim thay phan tu Content</div>;
  }
}

export default ChooseProperties;
