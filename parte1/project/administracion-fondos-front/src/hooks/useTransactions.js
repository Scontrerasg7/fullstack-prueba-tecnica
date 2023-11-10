import { useContext } from "react";
import { TransactionsContext } from "../context/transactions.jsx";

export const useTransactions = () => {
    const transactions = useContext(TransactionsContext)

    if (transactions == undefined) {
        throw new Error('useTransactions must be used within a PortfolioProvider')
    }

    return transactions
}