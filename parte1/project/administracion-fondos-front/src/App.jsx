import { useState, useEffect } from "react"

import { Products } from "./components/Products.jsx"
import { HeaderAdicion } from "./components/HeaderAdicion.jsx"
import { HeaderAdmin } from "./components/HeaderAdmin.jsx"
import { Portfolio } from "./components/Portfolio.jsx"
import { Footer } from "./components/Footer.jsx"
import { History } from "./components/History.jsx"

import { useFilters } from "./hooks/useFilters.js"
import { usePortfolio } from "./hooks/usePortfolio.js"

import { HashProvider } from "./context/hash.jsx"
import { TransactionsProvider } from "./context/transactions.jsx"

function App() {
  const {filterProducts} = useFilters()
  const [products, setProducts] = useState([])

  const apiUrl = 'http://127.0.0.1:5000/traer-fondos'
  
  useEffect(() => {
      // Realizar la petición de los productos cuando el componente App se monte
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl)
          const data = await response.json()

          setProducts(data.products)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      };
      fetchData();
    }
  , [])  

  const filteredProducts = filterProducts(products) 
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

      <TransactionsProvider>
      <HashProvider>

        <History />

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
      </TransactionsProvider>

    </>
  )
}

export default App
