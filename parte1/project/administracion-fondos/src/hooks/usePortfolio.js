import { useContext } from "react";
import { PortfolioContext } from "../context/portfolio.jsx";

export const usePortfolio = () => {
    const portfolio = useContext(PortfolioContext)

    if (portfolio == undefined) {
        throw new Error('usePortfolio must be used within a PortfolioProvider')
    }

    return portfolio
}