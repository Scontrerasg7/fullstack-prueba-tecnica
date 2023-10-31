import { Products } from "./components/Products.jsx"
import { HeaderAdicion } from "./components/HeaderAdicion.jsx"
import { HeaderAdmin } from "./components/HeaderAdmin.jsx"
import { Portfolio } from "./components/Portfolio.jsx"

import { products as initialProducts } from "./mocks/products.json"

import { useFilters } from "./hooks/useFilters"

function App() {
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts) 

  return (
    <>
      <div class="container">
        <div>
          <HeaderAdicion />
          <Products products={filteredProducts} />
        </div>

        <div>
          <HeaderAdmin />
          <Portfolio />
        </div>
      </div>
    </>
  )
}

export default App
