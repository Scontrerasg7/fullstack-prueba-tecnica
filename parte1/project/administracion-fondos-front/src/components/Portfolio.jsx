import { RemoveFromCartIcon } from "./Icons.jsx";

import { usePortfolio } from "../hooks/usePortfolio.js";
import { useHash } from "../hooks/useHash.js";
import { useTransactions } from "../hooks/useTransactions.js";

import { v4 as uuidv4 } from 'uuid';

function PortfolioItem (product) {
    const {removeFromPortfolio} = usePortfolio()
    const {setHash} = useHash()
    const {newCancellation} = useTransactions()

    const buttonClick = (id) => {
        removeFromPortfolio(id)
        const hash = uuidv4()
        setHash(hash)
        newCancellation(product, hash)

    }

    return(
        <li>
            <div>
                <strong>{product.title}</strong>
            </div>

            <footer>
                <small>
                    COP - {product.opening}
                </small>
            </footer>
            <button onClick={() => buttonClick(product.id)}>
                <RemoveFromCartIcon/>
            </button>
        </li>
    )
}


export function Portfolio () {
    const {portfolio} = usePortfolio()
    
    return (
        <ul>
            {portfolio.map(product => (
                <PortfolioItem key={product.id} {...product} />
            ))}
        </ul>
    )
}