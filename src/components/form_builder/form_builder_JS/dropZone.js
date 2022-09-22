import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../form_builder_CSS/dropZone.css";

import { updateIdItem } from "../../../features/builder/IdItemInsert.js";
import { incrementDropzone } from "../../../features/builder/ONDropzoneBorn.js";
import { updateNode } from "../../../features/builder/ObjectTotalNode.js";
import { updateGeneralPro } from "../../../features/builder/GeneralProperties";
import { updateAllGenPro } from "../../../features/builder/AllGenProperties.js";

var OrderDropzoneBorn = 0;

function DropZone(props) {
  // --------------------------------------------------------
  // Return Dropzone where can drop itemBox component
  // HandleDragOver: handle event: Drag Over
  // HandleDragLeave: handle event: Drag Leave
  // -------------------------------------------------------
  const dispatch = useDispatch();

  const [checkDrop, setCheckDrop] = useState();
  const [checkOver, setCheckOver] = useState();
  const [NodeInsertCurrent, setNodeInsertCurrent] = useState({
    idParent: "",
    idName: "",
    children: [],
    dopzoneCurrent: { level: "", birthOrder: "", dropChild: "" },
  });

  const idItemInsert = useSelector((state) => state.idItem.value);
  // const dropzoneBorn = useSelector((state) => state.dropzoneBorn.value);
  const totalNode = useSelector((state) => state.totalNode.value);
  const allGenPro = useSelector((state) => state.allGenPro.value);
  const GeneralPro = useSelector((state) => state.generalPro.value);

  const totalObject = JSON.parse(JSON.stringify(totalNode));

  var fakeContext;

  const InitializeGenPro = (orderNumber, orderBirth) => {
    //----------------------------------------------------------
    // Base on nameToolbox dropped => Choose properties need to display on general tab
    //----------------------------------------------------------
    switch (orderNumber) {
      case "2":
        console.log("Day la 2");
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Container",
              ChildrenContainerView: "None",
              display: "Not set",
              float: "None",
            },
          })
        );
        break;

      case "15":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Header",
              Content: "Header Content",
              Size: "Medium",
              TextAlign: "Left",
              Subheader: "",
            },
          })
        );
        break;

      case "16":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Input",
              Type: "Text",
              Options: { Fluid: true },
              Label: "Input",
              LabelPosition: "Default",
              Placeholder: "",
              Size: "Default",
            },
          })
        );
        break;

      case "17":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "NumberFormat",
              Format: "",
              Prefix: "",
              Label: "NumberFormat",
              Suffix: "",
              Placeholder: "",
              Options: { Fluid: true },
            },
          })
        );
        break;

      case "18":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "TextArea",
              Rows: "3",
              Label: "TextArea",
              Placeholder: "",
              Options: { ReadOnly: false },
            },
          })
        );
        break;

      case "21":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Dropdown",
              Data: {},
              Label: "Dropdown",
              Placeholder: "",
              Options: { Fluid: true, Selection: true },
            },
          })
        );
        break;

      case "22":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Checkbox",
              Options: {},
              Label: "Checkbox",
            },
          })
        );
        break;

      case "23":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "RadioGroup",
              Data: {},
              Label: "Radio",
              GroupDirection: "None",
              GroupDirectionReadOnly: false,
            },
          })
        );
        break;

      case "24":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Button",
              Content: "Button",
              Options: {},
              Icon: "",
              Size: "Default",
              Floated: "Default",
            },
          })
        );
        break;

      case "25":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Label",
              Content: "Label",
              Size: "Default",
              Attached: "None",
              Options: {},
            },
          })
        );
        break;

      case "32":
        dispatch(
          updateAllGenPro({
            ...allGenPro,
            [orderBirth]: {
              Name: "Files",
              IconFileTypes: "",
              IdField: "id",
              FileProperties: {},
            },
          })
        );
        break;

      default:
        break;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.remove("dragStart");
    e.target.classList.add("dragOver");
    return true;
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove("dragOver");
    e.target.classList.add("dragStart");
  };

  const FindDropzone = (array, birth, dropchildren, level, first) => {
    let indexNode = 0;

    array.forEach((ele) => {
      indexNode++;

      // Neu tim ra dropzone
      if (ele.dopzoneCurrent.birthOrder === birth) {
        // Neu dropzone la first dropzone
        if (first) {
          // Set gia tri nodecurrent
          let nodeInsert = {
            idParent: "first",
            idName: idItemInsert,
            children: [],
            dopzoneCurrent: {
              level: level,
              birthOrder: OrderDropzoneBorn,
              dropChild: dropchildren,
            },
          };
          // lien ket vao children
          ele.children.splice(0, 0, nodeInsert);
          // ele.children = [nodeInsert, ...ele.children];
          return array;
        } else {
          // tao object cho node vua insert

          let nodeInsert = {
            idParent: "last",
            idName: idItemInsert,
            children: [],
            dopzoneCurrent: {
              level: level,
              birthOrder: OrderDropzoneBorn,
              dropChild: dropchildren,
            },
          };

          // Them object vao trong array
          return array.splice(indexNode, 0, nodeInsert);
        }
      } else {
        if (ele.children !== []) {
          if (level > ele.dopzoneCurrent.level) {
            FindDropzone(ele.children, birth, dropchildren, level, first);
          }
        }
      }
    });

    return array;
    // gan vao trong object tong hop cac node insert
  };

  const HandleDrop = (fakeCheckDrop) => {
    let check = fakeCheckDrop === checkOver && fakeCheckDrop !== undefined;
    if (check) {
      setCheckDrop("");
      // logic nay chi mang tinh viet cho nhanh, can hoan thanh sau khi logic lon nhat dung
      const countDropChild = idItemInsert === "2" ? 2 : 1;
      //ket thuc logic nhanh
      OrderDropzoneBorn += countDropChild;
      dispatch(incrementDropzone(OrderDropzoneBorn));

      // TH1: drop on first dropzone
      if (props.first && props.level === 1) {
        setNodeInsertCurrent(() => {
          return {
            idParent: "first",
            idName: idItemInsert,
            children: [],
            dopzoneCurrent: {
              level: props.level,
              birthOrder: OrderDropzoneBorn,
              dropChild: countDropChild,
            },
          };
        });
      } else {
        if (props.first) {
          fakeContext = FindDropzone(
            totalObject,
            props.birthOrder + 1,
            countDropChild,
            props.level,
            true
          );
          // tao object cho node vua insert
        }
        //TH2: drop on node that difference first node
        else {
          fakeContext = FindDropzone(
            totalObject,
            props.birthOrder,
            countDropChild,
            props.level,
            false
          );
        }
      }
    }
    if (fakeContext !== undefined) {
      dispatch(updateNode([...fakeContext]));
    }
    // Initialize GenPro after drop
    InitializeGenPro(idItemInsert, OrderDropzoneBorn);
  };

  useEffect(() => {
    if (NodeInsertCurrent.idParent !== "" && props.first && props.level === 1) {
      dispatch(updateNode([NodeInsertCurrent, ...totalNode]));
    }
  }, [NodeInsertCurrent]);

  return (
    <>
      <div
        className={`dropZone notDrag ${props.class}`}
        onDragOver={(e) => {
          handleDragOver(e);
          setCheckOver(e.target);
        }}
        onDragLeave={(e) => {
          handleDragLeave(e);
          setCheckOver("");
        }}
        onDrop={(e) => {
          setCheckDrop(e.target);
          HandleDrop(e.target);
        }}
      >
        DROP ZONE
      </div>
    </>
  );
}

export default DropZone;
