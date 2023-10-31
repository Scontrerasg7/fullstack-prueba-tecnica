import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { usePortfolio } from '../hooks/usePortfolio'

export function Products ({ products }) {
    const {addToPortfolio} = usePortfolio()


    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            <strong>{product.title}</strong> - COP {product.opening}
                        </div>
                        <button onClick={() => addToPortfolio(product)}>
                            <AddToCartIcon />
                        </button>
                    </li>
                ))}      
            </ul>
        </main>
    )
}