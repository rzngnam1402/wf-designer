import { useSelector } from "react-redux";

import General from "./General";

function GeneralLayout() {
  //----------------------------------------------------------
  // Base on nameToolbox dropped => Choose properties need to display on general tab
  //----------------------------------------------------------
  const itemTBGen = useSelector((state) => state.itemTBGeneral.value);

  switch (itemTBGen) {
    case "Container":
      return (
        <General
          Name={{ render: true, float: "none" }}
          ChildrenContainerView={{ render: true, float: "none" }}
        />
      );

    case "Header":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Content={{ render: true, float: "left" }}
          Size={{ render: true, float: "right" }}
          TextAlign={{ render: true, float: "right" }}
          Subheader={{ render: true, float: "none" }}
        />
      );

    case "Input":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Type={{ render: true, float: "left" }}
          Options={{ render: true, float: "left", nameItem: "Input" }}
          Label={{ render: true, float: "right" }}
          LabelPosition={{ render: true, float: "right" }}
          Placeholder={{ render: true, float: "right" }}
          Size={{ render: true, float: "right" }}
        />
      );

    case "NumberFormat":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Format={{ render: true, float: "left" }}
          Prefix={{ render: true, float: "left" }}
          Label={{ render: true, float: "right" }}
          Mark={{ render: true, float: "right" }}
          Suffix={{ render: true, float: "right" }}
          Placeholder={{ render: true, float: "right" }}
          Options={{
            render: true,
            float: "none",
            nameItem: "NumberFormat",
          }}
        />
      );

    case "TextArea":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Rows={{ render: true, float: "left" }}
          Label={{ render: true, float: "right" }}
          Placeholder={{ render: true, float: "right" }}
          Options={{ render: true, float: "right", nameItem: "TextArea" }}
        />
      );

    case "Dropdown":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Data={{ render: true, float: "left" }}
          Label={{ render: true, float: "right" }}
          Placeholder={{ render: true, float: "right" }}
          Options={{ render: true, float: "right", nameItem: "Dropdown" }}
        />
      );

    case "Checkbox":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Options={{ render: true, float: "left", nameItem: "Checkbox" }}
          Label={{ render: true, float: "right" }}
        />
      );

    case "RadioGroup":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Data={{ render: true, float: "left" }}
          Label={{ render: true, float: "right" }}
          GroupDirection={{ render: true, float: "right" }}
        />
      );

    case "Button":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Content={{ render: true, float: "left" }}
          Options={{ render: true, float: "left", nameItem: "Button" }}
          Icon={{ render: true, float: "right" }}
          Size={{ render: true, float: "right" }}
          Floated={{ render: true, float: "right" }}
        />
      );

    case "Label":
      return (
        <General
          Name={{ render: true, float: "left" }}
          Content={{ render: true, float: "left" }}
          Size={{ render: true, float: "left" }}
          Attached={{ render: true, float: "right" }}
          Options={{ render: true, float: "right", nameItem: "Label" }}
        />
      );

    case "Files":
      return (
        <General
          Name={{ render: true, float: "none" }}
          IconFileTypes={{ render: true, float: "none" }}
          IdField={{ render: true, float: "left" }}
          FileProperties={{ render: true, float: "right" }}
        />
      );

    default:
      return <div>Loi Khong tim thay phan tu</div>;
  }
}

export default GeneralLayout;
