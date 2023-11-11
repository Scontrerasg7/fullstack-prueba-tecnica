import { createContext, useState, useEffect } from "react";
import { API_URL } from "../../../apiUrl";

export const PortfolioContext = createContext()

export function PortfolioProvider ({ children }) {
    const [portfolio, setPortfolio] = useState([])
    
    const apiUrl = API_URL + '/portfolio'

    useEffect(() => {        
        const fetchPortfolio = async () => {
          try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setPortfolio(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchPortfolio();
    }, [apiUrl]);

    const addToPortfolio = async (product) => {
        try {
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error(`Failed to add to portfolio: ${response.status}`);
            }

            setPortfolio((prevState) => [
                ...prevState,
                {
                    ...product,
                },
            ]);

        } catch (error) {
            console.error(error)
        }
    };

    const removeFromPortfolio = async (product) => {
        try {
            const response = await fetch(apiUrl, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( product ),
            });

            if (!response.ok) {
                throw new Error(`Failed to remove from portfolio: ${response.status}`);
            }
            
            setPortfolio((prevState) => prevState.filter((item) => item.id !== product.id))

        } catch (error) {
            console.error(error);
        }
    };

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