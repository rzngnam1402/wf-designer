import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../form_builder_CSS/dropZone.css";

import {
    incrementDropzone,
    updateNode,
    updateAllGenPro,
} from "../../../features/builder";

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
    // const GeneralPro = useSelector((state) => state.generalPro.value);

    const totalObject = JSON.parse(JSON.stringify(totalNode));

    var fakeContext;

    const InitializeGenPro = (orderNumber, orderBirth) => {
        //----------------------------------------------------------
        // Base on nameToolbox dropped => Choose properties need to display on general tab
        //----------------------------------------------------------
        switch (orderNumber) {
            case "2":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "3":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "StaticContent",
                                FontSize: "20px",
                                TextStatic: "Text...",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            // case "4":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "5":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            case "6":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Card",
                                Header: "Card",
                                Subheader: "Description",
                                ImageURL: "",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            // case "7":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Card",
            //                     Header: "Card",
            //                     Subheader: "Description",
            //                     ImageURL: "",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "8":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            case "9":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "GridLayout",
                                Columns: "3",
                                Options: "",
                                Panes: "",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            // case "11":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "12":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "13":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;

            case "15":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Header",
                                Content: "Header Content",
                                Size: "Medium",
                                TextAlign: "Left",
                                Subheader: "",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "16":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Input",
                                Type: "Text",
                                Options: { Fluid: true },
                                Label: "Input",
                                LabelPosition: "Default",
                                Placeholder: "",
                                Size: "Default",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "17":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "NumberFormat",
                                Format: "",
                                Prefix: "",
                                Label: "NumberFormat",
                                Suffix: "",
                                Placeholder: "",
                                Options: { Fluid: true },
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "18":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "TextArea",
                                Rows: "3",
                                Label: "TextArea",
                                Placeholder: "",
                                Options: { ReadOnly: false },
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            // case "19":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "TextArea",
            //                     Rows: "3",
            //                     Label: "TextArea",
            //                     Placeholder: "",
            //                     Options: { ReadOnly: false },
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "20":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "TextArea",
            //                     Rows: "3",
            //                     Label: "TextArea",
            //                     Placeholder: "",
            //                     Options: { ReadOnly: false },
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;

            case "21":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Dropdown",
                                Data: {},
                                Label: "Dropdown",
                                Placeholder: "",
                                Options: { Fluid: true, Selection: true },
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "22":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Checkbox",
                                Options: {},
                                Label: "Checkbox",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "23":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "RadioGroup",
                                Data: {},
                                Label: "Radio",
                                GroupDirection: "None",
                                GroupDirectionReadOnly: false,
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "24":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Button",
                                Content: "Button",
                                Options: {},
                                Icon: "",
                                Size: "Default",
                                Floated: "Default",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "25":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Label",
                                Content: "Label",
                                Size: "Default",
                                Attached: "None",
                                Options: {},
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            case "26":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Message",
                                Header: "Message",
                                Content: "Description",
                                Options: "",
                                Size: "Default",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "27":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Image",
                                Src: "",
                                Href: "",
                                Options: "",
                                Floated: "",
                                VerticalAlign: "",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            // case "28":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "29":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "30":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "31":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            case "32":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Files",
                                IconFileTypes: "",
                                IdField: "id",
                                FileProperties: {},
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;

            // case "33":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "34":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "35":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "36":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "37":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "38":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;
            // case "39":
            //     dispatch(
            //         updateAllGenPro({
            //             ...allGenPro,
            //             [orderBirth]: {
            //                 General: {
            //                     Name: "Container",
            //                     ChildrenContainerView: "None",
            //                     display: "Not set",
            //                     float: "None",
            //                 },
            //                 Style: {},
            //                 Events: {},
            //             },
            //         })
            //     );
            //     break;

            case "41":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "42":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "43":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "44":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "45":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "46":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "48":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
                        },
                    })
                );
                break;
            case "49":
                dispatch(
                    updateAllGenPro({
                        ...allGenPro,
                        [orderBirth]: {
                            General: {
                                Name: "Container",
                                ChildrenContainerView: "None",
                                display: "Not set",
                                float: "None",
                            },
                            Style: {},
                            Events: {},
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
            console.log("ele from array: ", ele);
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
                    // Position needed push
                    if (!props.position) {
                        ele.children.splice(0, 0, nodeInsert);
                    } else {
                        let fakeChildren =
                            ele.children[
                                props.position && props.position.order - 1
                            ] || [];
                        fakeChildren.splice(0, 0, nodeInsert);
                        ele.children[
                            props.position && props.position.order - 1
                        ] = fakeChildren;
                    }

                    // lien ket vao children
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
                        const checkType = ele.children[0];

                        if (
                            Object.prototype.toString.call(ele.children[0]) !==
                            "[object Array]"
                        ) {
                            FindDropzone(
                                ele.children,
                                birth,
                                dropchildren,
                                level,
                                first
                            );
                        } else {
                            ele.children.forEach((child) => {
                                FindDropzone(
                                    child,
                                    birth,
                                    dropchildren,
                                    level,
                                    first
                                );
                            });
                        }
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
            let countDropChild = 1;
            if (idItemInsert === "2") countDropChild = 2;
            if (idItemInsert === "6") countDropChild = 3;
            if (idItemInsert === "9") countDropChild = 4;
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
                    let spFindDropZone = 1;
                    if (props.position) {
                        spFindDropZone =
                            props.position.totalDropzone -
                            props.position.order +
                            1;
                    }
                    fakeContext = FindDropzone(
                        totalObject,
                        props.birthOrder + spFindDropZone,
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
        if (
            NodeInsertCurrent.idParent !== "" &&
            props.first &&
            props.level === 1
        ) {
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
