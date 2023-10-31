import { Products } from "./components/Products.jsx"
import { HeaderAdicion } from "./components/HeaderAdicion.jsx"
import { HeaderAdmin } from "./components/HeaderAdmin.jsx"
import { Portfolio } from "./components/Portfolio.jsx"

import { products as initialProducts } from "./mocks/products.json"

import { PortfolioProvider } from "./context/portfolio.jsx"

import { useFilters } from "./hooks/useFilters.js"

function App() {
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts) 

  return (
    <PortfolioProvider>
      <div className="container">
        <div className="content">
          <HeaderAdicion />
          <Products products={filteredProducts} />
        </div>

        <div className="content">
          <HeaderAdmin />
          <Portfolio />
        </div>
      </div>
    </PortfolioProvider>
  )
}

export default App
