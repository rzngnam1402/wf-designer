import { createContext, useState } from "react"

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
        <IdItemInsertContext.Provider value={ValueId} a>
            {children}
        </IdItemInsertContext.Provider>
    )
}

export { IdItemInsertContext, IdItemProvider }