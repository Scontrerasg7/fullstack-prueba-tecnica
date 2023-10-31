import './Filters.css'

export function Filters ({ onChange }) {

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
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