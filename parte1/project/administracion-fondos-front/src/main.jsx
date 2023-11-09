import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { FiltersProvider } from './context/filters.jsx'
import { PortfolioProvider } from "./context/portfolio.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
  </FiltersProvider>,
)
