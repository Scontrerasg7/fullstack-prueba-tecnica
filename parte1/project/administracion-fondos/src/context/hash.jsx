import { createContext, useState } from "react";

export const HashContext = createContext()

export function HashProvider ({ children }) {
    const [hash, setHash] = useState([])

    return (
        <HashContext.Provider value={{
            hash,
            setHash
        }}>
            {children}
        </HashContext.Provider>
    )
}