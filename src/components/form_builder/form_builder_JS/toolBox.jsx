import { useState } from "react";

import "../form_builder_CSS/toolBox.css";

import ToolBoxItem from "./toolBoxItem";

// Initialize 5 variables include title and item in toolbox via object
const ListContainers = {
  title: {
    id: "1",
    content: "Containers",
  },
  item: [
    { id: "2", content: "Container" },
    { id: "3", content: "Static Content" },
    { id: "4", content: "Form" },
    { id: "5", content: "Form Group" },
    { id: "6", content: "Card" },
    { id: "7", content: "Tab" },
    { id: "8", content: "Custom block" },
    { id: "9", content: "Grid Layout" },
  ],
};

const ListCollections = {
  title: {
    id: "10",
    content: "Collections",
  },
  item: [
    { id: "11", content: "GridView" },
    { id: "12", content: "Collection Editor" },
    { id: "13", content: "Repeater" },
  ],
};

const ListControls = {
  title: {
    id: "14",
    content: "Controls",
  },
  item: [
    { id: "15", content: "Header" },
    { id: "16", content: "Input" },
    { id: "17", content: "Number " },
    { id: "18", content: "TextArea" },
    { id: "19", content: "Dictionary" },
    { id: "20", content: "TreePicker" },
    { id: "21", content: "Dropdown" },
    { id: "22", content: "CheckBox" },
    { id: "23", content: "Radio group" },
    { id: "24", content: "Button" },
    { id: "25", content: "Label" },
    { id: "26", content: "Message" },
    { id: "27", content: "Image" },
    { id: "28", content: "Statistic" },
    { id: "29", content: "Custom control" },
    { id: "30", content: "Dropdown trigger" },
    { id: "31", content: "Dropzone" },
    { id: "32", content: "Files" },
    { id: "33", content: "Signature" },
    { id: "34", content: "Camera" },
    { id: "35", content: "Breadcrumbs" },
    { id: "36", content: "Search" },
    { id: "37", content: "Menu" },
    { id: "38", content: "Workflow bar" },
    { id: "39", content: "Rich Text Editor" },
  ],
};

const ListCharts = {
  title: {
    id: "40",
    content: "Charts",
  },
  item: [
    { id: "41", content: "Bar" },
    { id: "42", content: "Line" },
    { id: "43", content: "Scatter " },
    { id: "44", content: "Doughnut" },
    { id: "45", content: "Pie" },
    { id: "46", content: "Radar" },
  ],
};

const ListTemplates = {
  title: {
    id: "47",
    content: "Templates",
  },
  item: [
    { id: "48", content: "contactform" },
    { id: "49", content: "toolbarbuttons" },
  ],
};

function ToolBox() {
  // ------------------------------------------------------
  // Return 5 title list item in toolbox
  // Use to toggle function to create hidden effects
  // ------------------------------------------------------

  const [showContainers, setShowContainers] = useState(false);
  const [showCollections, setShowCollections] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="toolBox_container">
      <div className="toolBox_search">
        <input type="text" placeholder="Search..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <ul className="toolBox_list_option">
        <li
          className="toolBox_title"
          key={ListContainers.title.id}
          onClick={() => setShowContainers(!showContainers)}
        >
          {ListContainers.title.content}
          {showContainers ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </li>
        {showContainers && <ToolBoxItem listItem={ListContainers.item} />}

        <li
          className="toolBox_title"
          key={ListCollections.title.id}
          onClick={() => setShowCollections(!showCollections)}
        >
          {ListCollections.title.content}
          {showCollections ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </li>
        {showCollections && <ToolBoxItem listItem={ListCollections.item} />}

        <li
          className="toolBox_title"
          key={ListControls.title.id}
          onClick={() => setShowControls(!showControls)}
        >
          {ListControls.title.content}
          {showControls ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </li>
        {showControls && <ToolBoxItem listItem={ListControls.item} />}

        <li
          className="toolBox_title"
          key={ListCharts.title.id}
          onClick={() => setShowCharts(!showCharts)}
        >
          {ListCharts.title.content}
          {showCharts ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </li>
        {showCharts && <ToolBoxItem listItem={ListCharts.item} />}

        <li
          className="toolBox_title"
          key={ListTemplates.title.id}
          onClick={() => setShowTemplates(!showTemplates)}
        >
          {ListTemplates.title.content}
          {showTemplates ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </li>
        {showTemplates && <ToolBoxItem listItem={ListTemplates.item} />}
      </ul>
    </div>
  );
}

export default ToolBox;
