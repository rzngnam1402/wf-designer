import { createContext, useState } from "react";

// ---------------------------------------------------------------------
// Variable is used to passing object into child component
const IdItemInsertContext = createContext();

function IdItemProvider({ children }) {
  // featured Function is initialized when use useContext hook
  const [id, setId] = useState();

  const setValueId = (value) => {
    setId(value);
  };

  const ValueId = {
    id,
    setValueId,
  };

  return (
    <IdItemInsertContext.Provider value={ValueId}>
      {children}
    </IdItemInsertContext.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to hidden or appear modal
const checkModal = createContext();

function ModalProperties({ children }) {
  // featured Function is initialized when use useContext hook
  const [ToggleModal, setToggleModal] = useState({
    check: false,
    nameItem: "",
  });

  const setValueToggleModal = (value) => {
    setToggleModal(value);
  };

  const ValueToggleModal = {
    ToggleModal,
    setValueToggleModal,
  };

  return (
    <checkModal.Provider value={ValueToggleModal}>
      {children}
    </checkModal.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to count order number of item that will drop
const OderNumberitemDrop = createContext();

function SetOderNumber({ children }) {
  // featured Function is initialized when use useContext hook
  const [order, setOrder] = useState(1);

  const IncreaseValueOrder = () => {
    setOrder((prev) => prev + 1);
  };

  const ValueOrder = {
    order,
    IncreaseValueOrder,
  };

  return (
    <OderNumberitemDrop.Provider value={ValueOrder}>
      {children}
    </OderNumberitemDrop.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to count order number of dropzone born
const OrderDropzoneBorn = createContext();

function SetOrderDropzoneBorn({ children }) {
  // featured Function is initialized when use useContext hook
  const [order, setOrder] = useState(0);

  const SetValueOrder = (value) => {
    setOrder((prev) => prev + value);
  };

  const ValueOrder = {
    order,
    SetValueOrder,
  };

  return (
    <OrderDropzoneBorn.Provider value={ValueOrder}>
      {children}
    </OrderDropzoneBorn.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to set up name item of controls toolbox General
const itemToolboxGeneral = createContext();

function SetItemToolboxGeneral({ children }) {
  // featured Function is initialized when use useContext hook
  const [nameToolbox, setNameToolbox] = useState();

  const SetValueNameToolbox = (value) => {
    setNameToolbox(value);
  };

  const ValueNameToolbox = {
    nameToolbox,
    SetValueNameToolbox,
  };

  return (
    <itemToolboxGeneral.Provider value={ValueNameToolbox}>
      {children}
    </itemToolboxGeneral.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to save total component inside form
const ObjectTotalNode = createContext();

function SetObjectTotalNode({ children }) {
  // featured Function is initialized when use useContext hook
  const [node, setNode] = useState([]);

  const SetObjectNodeInsert = (value) => {
    setNode(value);
  };

  const ValueObjectNode = {
    node,
    SetObjectNodeInsert,
  };

  return (
    <ObjectTotalNode.Provider value={ValueObjectNode}>
      {children}
    </ObjectTotalNode.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to difine index inserted note
const CheckRender = createContext();

function SetCheckRender({ children }) {
  // featured Function is initialized when use useContext hook
  const [checkRender, setCheckRender] = useState(false);

  const SetValueCheckRender = (value) => {
    setCheckRender(value);
  };

  const ValueCheckRender = {
    checkRender,
    SetValueCheckRender,
  };

  return (
    <CheckRender.Provider value={ValueCheckRender}>
      {children}
    </CheckRender.Provider>
  );
}

// ---------------------------------------------------------------------
// variable is used to switch between builder mode and preview mode
const Preview = createContext();

function SetPreview({ children }) {
  // featured Function is initialized when use useContext hook
  const [preview, setPreview] = useState(false);

  const SetValuePreview = (value) => {
    setPreview(value);
  };

  const ValuePreview = {
    preview,
    SetValuePreview,
  };

  return <Preview.Provider value={ValuePreview}>{children}</Preview.Provider>;
}

export { IdItemInsertContext, IdItemProvider };
export { checkModal, ModalProperties };
export { OderNumberitemDrop, SetOderNumber };
export { OrderDropzoneBorn, SetOrderDropzoneBorn };
export { itemToolboxGeneral, SetItemToolboxGeneral };
export { ObjectTotalNode, SetObjectTotalNode };
export { CheckRender, SetCheckRender };
export { Preview, SetPreview };
