import { Link } from 'react-router-dom'

const FiltersContainer = ({ filters, className, textColor }) => {
    return (

        <ul className={className} data-testid="__test_filtersList">
            {filters && filters.length > 0 ? filters.map(
                (v, i) => (
                    <Link key={i} to={`/categories/${v.id}`} className={textColor+' text-decoration-none'} data-testid="__test_filtersLink" > {v.name} </Link>
                )
            ) : 'No filters found'}
        </ul>
    )
}

export default FiltersContainer
