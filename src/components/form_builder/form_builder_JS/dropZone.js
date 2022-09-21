import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { memo } from "react";
// import { useCallback } from "react";

import "../form_builder_CSS/dropZone.css";
// import ItemContent from "./ItemContent";
// import DropAddition from "./dropAddition";

import { update } from "../../../features/builder/IdItemInsert.js";
import { incrementDropzone } from "../../../features/builder/ONDropzoneBorn.js";
import { updateNode } from "../../../features/builder/ObjectTotalNode.js";

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
  const dropzoneBorn = useSelector((state) => state.dropzoneBorn.value);
  const totalNode = useSelector((state) => state.totalNode.value);

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
            idName: idItemInsert,
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

      const countDropChild = idItemInsert === "2" ? 2 : 1;
      OrderDropzoneBorn += countDropChild;
      dispatch(incrementDropzone(OrderDropzoneBorn));

      // logic nay chi mang tinh viet cho nhanh, can hoan thanh sau khi logic lon nhat dung
      //ket thuc logic nhanh

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
            totalNode,
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
            totalNode,
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
  };

  useEffect(() => {
    if (NodeInsertCurrent.idParent !== "" && props.first && props.level === 1) {
      dispatch(updateNode((prev) => [NodeInsertCurrent, ...prev]));
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
