import './Filters.css'

export function Filters () {
    return(
        <section className='filters'>

            <div>
                <label htmlFor='category'>Categoría</label>     
                <select id='category'>
                    <option value='all'>Todos</option>
                    <option value='FVP'>FVPs</option>
                    <option value='FIC'>FICs</option>
                </select>           
            </div>
        </section>
    )
}