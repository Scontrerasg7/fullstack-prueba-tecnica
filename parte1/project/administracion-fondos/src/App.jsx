import { useState } from "react"

import { products as initialProducts } from "./mocks/products.json"

import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header"

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        filters.category == 'all' ||
        filters.category == product.category
      )
   })
  }

  const filteredProducts = filterProducts(products) 

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
