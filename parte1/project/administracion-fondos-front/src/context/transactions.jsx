import { createContext, useState } from "react";

export const TransactionsContext = createContext()

export function TransactionsProvider ({ children }) {
    const [transactions, setTransactions] = useState([])

    const newOpening = (product, hash) => {
        setTransactions(prevState => ([
            {
                type: 'Apertura',
                product: product,
                id: hash
            },
            ...prevState
        ]))        
    }

    const newCancellation = (product, hash) => {
        setTransactions(prevState => ([
            {
                type: 'Cancelación',
                product: product,
                id: hash
            },
            ...prevState
        ]))
    }

    return (
        <TransactionsContext.Provider value={{
            transactions,
            newOpening,
            newCancellation
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

