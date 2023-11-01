import { Products } from "./components/Products.jsx"
import { HeaderAdicion } from "./components/HeaderAdicion.jsx"
import { HeaderAdmin } from "./components/HeaderAdmin.jsx"
import { Portfolio } from "./components/Portfolio.jsx"
import { Footer } from "./components/Footer.jsx"

import { products as initialProducts } from "./mocks/products.json"

import { useFilters } from "./hooks/useFilters.js"
import { usePortfolio } from "./hooks/usePortfolio.js"

import { HashProvider } from "./context/hash.jsx"

function App() {
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(initialProducts) 
  const portfolio = usePortfolio()

  const totalInvestments = portfolio.portfolio.reduce((acc, product) => {
    return acc + product.opening
  }, 0)
  const totalInvestmentsDisplay = (500000 - totalInvestments).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  })

  return (
    <>
      <h1 className="money">Monto Disponible <br/> {totalInvestmentsDisplay}</h1>

      <HashProvider>
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

        <Footer />
      </HashProvider>

    </>
  )
}

export default App
