import { RemoveFromCartIcon } from "./Icons.jsx";
import { usePortfolio } from "../hooks/usePortfolio.js";

function PortfolioItem ({opening, title, id}) {
    const {removeFromPortfolio} = usePortfolio()
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
            <button onClick={() => removeFromPortfolio(id)}>
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