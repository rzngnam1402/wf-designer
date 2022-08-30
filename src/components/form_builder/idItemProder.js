import { createContext, useState } from "react"

// ---------------------------------------------------------------------
// Variable is used to passing object into child component
const IdItemInsertContext = createContext()

function IdItemProvider({ children }) {
    // featured Function is initialized when use useContext hook
    const [id, setId] = useState()

    const setValueId = (value) => {
        setId(value)
    }

    const ValueId = {
        id,
        setValueId
    }

    return (
        <IdItemInsertContext.Provider value={ValueId}>
            {children}
        </IdItemInsertContext.Provider>
    )
}
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// variable is used to hidden or appear modal
const checkModal = createContext()

function ModalProperties({ children }) {
    // featured Function is initialized when use useContext hook
    const [ToggleModal, setToggleModal] = useState(false)

    const setValueToggleModal = (value) => {
        setToggleModal(value)
    }

    const ValueToggleModal = {
        ToggleModal,
        setValueToggleModal
    }

    return (
        <checkModal.Provider value={ValueToggleModal}>
            {children}
        </checkModal.Provider>
    )
}

// ---------------------------------------------------------------------

export { IdItemInsertContext, IdItemProvider }
export { checkModal, ModalProperties }