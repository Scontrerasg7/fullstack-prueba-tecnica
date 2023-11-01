import { useContext } from "react"
import { FiltersContext } from "../context/filters.jsx"

export function useFilters () {
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