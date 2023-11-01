import { RemoveFromCartIcon } from "./Icons.jsx";

import { usePortfolio } from "../hooks/usePortfolio.js";
import { useHash } from "../hooks/useHash.js";

import { v4 as uuidv4 } from 'uuid';

function PortfolioItem ({opening, title, id}) {
    const {removeFromPortfolio} = usePortfolio()
    const {setHash} = useHash()

    const buttonClick = (id) => {
        removeFromPortfolio(id)
        setHash(uuidv4())
    }

    return(
        <li>
            <div>
                <strong>{title}</strong>
            </div>

            <footer>
                <small>
                    COP - {opening}
                </small>
            </footer>
            <button onClick={() => buttonClick(id)}>
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