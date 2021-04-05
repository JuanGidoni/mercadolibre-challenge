import { Link } from 'react-router-dom'
import { useDataContext } from '../../settings/DataContext'

const FiltersContainer = ({ filters, className, textColor }) => {
    
    const {totalItems } = useDataContext()

    return (
        <ul className={className} data-testid="__test_filtersList">
        <div className="d-flex flex-column justify-content-center align-items-start">
            <p className="m-0 p-0"><strong>Total</strong></p>
            <p className="smaller">{totalItems} productos</p>
        </div>
            {filters && filters.length > 0 ? filters.map(
                (v, i) => (
                    <Link key={i} to={`/categories/${v.id}`} className={textColor+' text-decoration-none'} data-testid="__test_filtersLink" > {v.name} </Link>
                )
            ) : 'No filters found'}
        </ul>
    )
}

export default FiltersContainer
