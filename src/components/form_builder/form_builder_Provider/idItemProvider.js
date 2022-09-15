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
    setOrder(order + 1);
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
// variable is used to count order number of item that will delete
const itemDelete = createContext();

function SetItemDelete({ children }) {
  // featured Function is initialized when use useContext hook
  const [order, setOrder] = useState(0);

  const SetValueOrder = (value) => {
    setOrder(value);
  };

  const ValueOrder = {
    order,
    SetValueOrder,
  };

  return (
    <itemDelete.Provider value={ValueOrder}>{children}</itemDelete.Provider>
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
  const [nodeCurrent, setNodeCurrent] = useState([]);

  const SetObjectNodeInsert = (value) => {
    setNodeCurrent(value);
  };

  const ValueObjectNode = {
    nodeCurrent,
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
const CheckChild = createContext();

function SetCheckChild({ children }) {
  // featured Function is initialized when use useContext hook
  const [checkChild, setCheckChild] = useState({ check: false, data: {} });

  const SetValueCheckChild = (value) => {
    setCheckChild(value);
  };

  const ValueCheckChild = {
    checkChild,
    SetValueCheckChild,
  };

  return (
    <CheckChild.Provider value={ValueCheckChild}>
      {children}
    </CheckChild.Provider>
  );
}

export { IdItemInsertContext, IdItemProvider };
export { checkModal, ModalProperties };
export { OderNumberitemDrop, SetOderNumber };
export { itemDelete, SetItemDelete };
export { itemToolboxGeneral, SetItemToolboxGeneral };
export { ObjectTotalNode, SetObjectTotalNode };
export { CheckChild, SetCheckChild };