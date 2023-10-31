import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { usePortfolio } from '../hooks/usePortfolio'

export function Products ({ products }) {
    const {portfolio, addToPortfolio} = usePortfolio()


    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInPortfolio = portfolio.some(portfolioProduct => portfolioProduct.id === product.id);

                    return (
                        <li key={product.id}>
                            <div>
                                <strong>{product.title}</strong> - COP {product.opening}
                            </div>
                            <button onClick={() => addToPortfolio(product)} disabled={isProductInPortfolio}>
                                <AddToCartIcon />
                            </button>
                        </li>
                    );
                })}   
            </ul>
        </main>
    )
}