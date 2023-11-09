import './Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
    const { setFilters } = useFilters()

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className='filters'>
            <div>
                <label htmlFor='category'>Categoría</label>     
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>Todos</option>
                    <option value='FVP'>FVPs</option>
                    <option value='FIC'>FICs</option>
                </select>           
            </div>
        </section>
    )
}