import {
  Header,
  Input,
  Label,
  Form,
  TextArea,
  Dropdown,
  Checkbox,
  Radio,
  Button,
} from "semantic-ui-react";

// import $ from "jquery";

import "../form_builder_CSS/ItemContent.css";

import ToolBarHeader from "../TableStructure/TableStructure_JS/toolBarHeader";
import DropZone from "./dropZone";
import DropComponentUI from "./dropComponentUI";

function ItemContent(props) {
  // -----------------------------------------------
  // Return represent of dragged and dropped item
  // -----------------------------------------------

  const sampleOption = [
    {
      key: "item_1",
      text: "item_1",
      value: "item_1",
    },
    {
      key: "item_2",
      text: "item_2",
      value: "item_2",
    },
    {
      key: "item_3",
      text: "item_3",
      value: "item_3",
    },
    {
      key: "item_4",
      text: "item_4",
      value: "item_4",
    },
    {
      key: "item_5",
      text: "item_5",
      value: "item_5",
    },
  ];

  switch (props.id) {
    case "2":
      return (
        <>
          <div className="ItemContent_containers">
            <div className="ItemContent_container">
              {!props.preview && (
                <DropZone
                  level={props.level + 1}
                  birthOrder={props.birthOrder - 1}
                  first={true}
                />
              )}
              <DropComponentUI nodes={props.children} preview={props.preview} />
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Container"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    // case '3':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '4':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '5':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '6':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '7':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '8':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '9':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '11':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '12':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    // case '13':
    //     return (<><div className=''>
    //         <div className="ItemContent">
    //             <DropZone />
    //         </div>
    //         <ToolBarHeader />
    //     </div>
    //         <div>
    //             <DropZone />
    //         </div></>)
    case "15":
      return (
        <>
          <div className="ItemContent_Controls ItemContent_Controls_header">
            <div className="ItemContent_Header">
              <Header size="large">Header</Header>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Header"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "16":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Input">
              <Label>Input</Label>
              <Input value="" fluid />
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Input"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "17":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_NumberFormat">
              <Label>NumberFormat</Label>
              <Input value="" fluid />
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="NumberFormat"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "18":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_TextArea">
              <Label>TextArea</Label>
              <Form>
                <TextArea value="" />
              </Form>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="TextArea"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "19":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Dictionary">
              <Label>Dictionary</Label>
              <Input value="" fluid />
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Dictionary"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "20":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_TreePicker">
              <Label>TreePicker</Label>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="TreePicker"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "21":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Dropdown">
              <Label>Dropdown</Label>
              <Dropdown fluid selection options={sampleOption} />
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Dropdown"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "22":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Checkbox">
              <Label>Checkbox</Label>
              <div>
                <Checkbox label="Check box" />
              </div>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Checkbox"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "23":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_RadioGroup">
              <Label>Radio Group</Label>
              <Form>
                <Form.Group>
                  <Form.Field>
                    <Radio label="item_1" />
                  </Form.Field>
                  <Form.Field>
                    <Radio label="item_2" />
                  </Form.Field>
                  <Form.Field>
                    <Radio label="item_3" />
                  </Form.Field>
                </Form.Group>
              </Form>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="RadioGroup"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "24":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Button">
              <Label>Button</Label>
              <div>
                <Button primary>Button</Button>
              </div>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Button"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "25":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Label">
              <Label>Label</Label>
            </div>
            {!props.preview && (
              <ToolBarHeader
                orderNumber={props.birthOrder}
                level={props.level}
                nameItemToolbox="Label"
              />
            )}
          </div>
          <div>
            {!props.preview && (
              <DropZone level={props.level} birthOrder={props.birthOrder} />
            )}
          </div>
        </>
      );
    case "26":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "27":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "28":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "29":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "30":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "31":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "32":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent_Files">
              <Label>Files</Label>
              <div>
                <input type="file" />
              </div>
            </div>
            <ToolBarHeader
              orderNumber={props.orderNumber}
              nameItemToolbox="Files"
            />
          </div>
        </>
      );
    case "33":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "34":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "35":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "36":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "37":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent"></div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "38":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent">
              <DropZone />
            </div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    case "39":
      return (
        <>
          <div className="ItemContent_Controls">
            <div className="ItemContent">
              <DropZone />
            </div>
            <ToolBarHeader orderNumber={props.orderNumber} />
          </div>
        </>
      );
    //     case '41':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '42':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '43':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '44':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '45':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '46':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '48':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    //     case '49':
    //         return (<><div className=''>
    //             <div className="ItemContent">
    //                 <DropZone />
    //             </div>
    //             <ToolBarHeader />
    //         </div>
    //             <div>
    //                 <DropZone />
    //             </div></>)
    default:
      return <div></div>;
  }
}

export default ItemContent;
