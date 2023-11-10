import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

import { usePortfolio } from '../hooks/usePortfolio.js'
import { useHash } from '../hooks/useHash.js'
import { useTransactions } from '../hooks/useTransactions.js'

import { v4 as uuidv4 } from 'uuid';

export function Products ({ products }) {
    const {portfolio, addToPortfolio} = usePortfolio()
    const {setHash} = useHash()
    const {newOpening} = useTransactions()

    const buttonClick = (product) => {
        const totalInvestments = portfolio.reduce((acc, product) => {
            return acc + product.opening
        }, 0)
        
        if (product.opening > 500000 - totalInvestments) {
            alert(`No tiene saldo disponible para vincularse al fondo ${product.title}`);
        } else {
            addToPortfolio(product);
            const hash = uuidv4()
            setHash(hash)
            newOpening(product, hash)
        }
    }

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
                            <button onClick={() => buttonClick(product)} disabled={isProductInPortfolio}>
                                <AddToCartIcon />
                            </button>
                        </li>
                    );
                })}   
            </ul>
        </main>
    )
}