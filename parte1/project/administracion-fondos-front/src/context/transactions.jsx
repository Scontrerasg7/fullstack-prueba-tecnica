import { createContext, useState, useEffect } from "react";

export const TransactionsContext = createContext()

export function TransactionsProvider ({ children }) {
    const [transactions, setTransactions] = useState([])

    const apiUrl = 'http://127.0.0.1:5000/transactions'; 

    useEffect(() => {
        const fetchTransactions = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error(error);
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
            console.error(error);
        }
        };

    const newCancellation = async (product, hash) => {
        try {
            const response = await fetch(apiUrl, {
                    method: "DELETE",
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
                throw new Error(`Failed to add cancellation transaction: ${response.status}`);
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
            console.error(error);
        }
    };

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

