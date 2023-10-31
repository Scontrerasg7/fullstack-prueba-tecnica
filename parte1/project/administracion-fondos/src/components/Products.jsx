import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            <strong>{product.title}</strong> - COP {product.opening}
                        </div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </li>
                ))}      
            </ul>
        </main>
    )
}