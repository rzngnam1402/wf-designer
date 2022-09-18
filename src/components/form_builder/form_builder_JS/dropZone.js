import { useState, useEffect, useContext, useRef } from "react";
// import { memo } from "react";
// import { useCallback } from "react";

import "../form_builder_CSS/dropZone.css";
// import ItemContent from "./ItemContent";
// import DropAddition from "./dropAddition";

import { IdItemInsertContext } from "../form_builder_Provider/idItemProvider";
import { OderNumberitemDrop } from "../form_builder_Provider/idItemProvider";
// import { OrderDropzoneBorn } from "../form_builder_Provider/idItemProvider";
import { ObjectTotalNode } from "../form_builder_Provider/idItemProvider";
// import { CheckRender } from "../form_builder_Provider/idItemProvider";

var OrderDropzoneBorn = 0;

function DropZone(props) {
  // --------------------------------------------------------
  // Return Dropzone where can drop itemBox component
  // HandleDragOver: handle event: Drag Over
  // HandleDragLeave: handle event: Drag Leave
  // -------------------------------------------------------

  // const [checkRender, setCheckRender] = useState(false);
  const [checkDrop, setCheckDrop] = useState();
  const [checkOver, setCheckOver] = useState();
  const [NodeInsertCurrent, setNodeInsertCurrent] = useState({
    idParent: "",
    idName: "",
    children: [],
    dopzoneCurrent: { level: "", birthOrder: "", dropChild: "" },
  });

  const DropZoneContent = useContext(IdItemInsertContext);
  const orderNumberItem = useContext(OderNumberitemDrop);
  // const OrderDropzone = useContext(OrderDropzoneBorn);
  const TotalNode = useContext(ObjectTotalNode);
  // const checkRenderUI = useContext(CheckRender);

  var fakeContext;

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
            idName: DropZoneContent.id,
            children: [],
            dopzoneCurrent: {
              level: level,
              birthOrder: OrderDropzoneBorn,
              dropChild: dropchildren,
            },
          };
          // lien ket vao children
          ele.children = [nodeInsert, ...ele.children];
          return array;
        } else {
          // tao object cho node vua insert

          let nodeInsert = {
            idParent: "last",
            idName: DropZoneContent.id,
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
            ele.children = FindDropzone(
              ele.children,
              birth,
              dropchildren,
              level,
              first
            );
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

      const countDropChild = DropZoneContent.id === "2" ? 2 : 1;
      OrderDropzoneBorn += countDropChild;
      orderNumberItem.IncreaseValueOrder(OrderDropzoneBorn);

      // logic nay chi mang tinh viet cho nhanh, can hoan thanh sau khi logic lon nhat dung
      //ket thuc logic nhanh

      // TH1: drop on first dropzone
      if (props.first && props.level === 1) {
        setNodeInsertCurrent(() => {
          return {
            idParent: "first",
            idName: DropZoneContent.id,
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
            TotalNode.node,
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
            TotalNode.node,
            props.birthOrder,
            countDropChild,
            props.level,
            false
          );
        }
      }
    }
    if (fakeContext !== undefined) {
      TotalNode.SetObjectNodeInsert([...fakeContext]);
    }
  };

  useEffect(() => {
    if (NodeInsertCurrent.idParent !== "" && props.first && props.level === 1) {
      TotalNode.SetObjectNodeInsert((prev) => [NodeInsertCurrent, ...prev]);
    }
  }, [NodeInsertCurrent]);

  return (
    <>
      {/* {console.log("Object dang tim: ", TotalNode.node)} */}
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
