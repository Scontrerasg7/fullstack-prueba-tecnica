import { products } from "./mocks/products.json"
import { Products } from "./components/Products.jsx"

function App() {
  return (
    <>
      <h1> Administración de Fondos 💰</h1>
      <Products products={products} />
    </>
  )
}

export default App
