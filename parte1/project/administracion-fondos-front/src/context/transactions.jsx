import { createContext, useState, useEffect } from "react";
import { API_URL } from "../../../apiUrl";

export const TransactionsContext = createContext()

export function TransactionsProvider ({ children }) {
    const [transactions, setTransactions] = useState([])

    const apiUrl = API_URL + '/transactions'

    useEffect(() => {
        const fetchTransactions = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setTransactions(data)
        } catch (error) {
            console.error(error)
        }
        };

        fetchTransactions();
    }, [apiUrl]);

    const newOpening = async (product, hash) => {
        try {
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: 'Apertura',
                    product: product,
                    id: hash,
                }),
            });
            if (!response.ok) {
                throw new Error(`Failed to add opening transaction: ${response.status}`);
            }

            setTransactions((prevState) => [
                {
                type: 'Apertura',
                product: product,
                id: hash,
                },
                ...prevState,
            ]);
        } catch (error) {
            console.error(error)
        }
        };

    const newCancellation = async (product, hash) => {
        try {
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: 'Cancelación',
                    product: product,
                    id: hash,
                }),
            });
            if (!response.ok) {
                throw new Error(`Failed to add opening transaction: ${response.status}`);
            }

            setTransactions((prevState) => [
                {
                type: 'Cancelación',
                product: product,
                id: hash,
                },
                ...prevState,
            ]);
        } catch (error) {
            console.error(error)
        }
        };;

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

