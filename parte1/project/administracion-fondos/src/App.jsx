import { useContext, useState } from "react"

import { products as initialProducts } from "./mocks/products.json"

import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header"
import { FiltersContext } from "./context/filters"

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        filters.category == 'all' ||
        filters.category == product.category
      )
   })
  }

  return {filterProducts, setFilters}
}

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products) 

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
