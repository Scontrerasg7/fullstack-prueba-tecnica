import './Products.css'
import { AddToCartIcon } from './icons.jsx'

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            <strong>{product.title}</strong>
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