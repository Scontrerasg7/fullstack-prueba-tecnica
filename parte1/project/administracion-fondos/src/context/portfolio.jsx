import { createContext, useState } from "react";

export const PortfolioContext = createContext()

export function PortfolioProvider ({ children }) {
    const [portfolio, setPortfolio] = useState([])

    const addToPortfolio = product => {
    setPortfolio(prevState => ([
        ...prevState,
        {
            ...product
        }
    ]))
    }

    const removeFromPortfolio = id => {
        setPortfolio(prevState => prevState.filter(item => item.id != id))
    }

    return (
        <PortfolioContext.Provider value={{
            portfolio,
            addToPortfolio,
            removeFromPortfolio
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}