import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header"

import { products as initialProducts } from "./mocks/products.json"

import { useState } from "react"
import { useFilters } from "./hooks/useFilters"

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products) 

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
