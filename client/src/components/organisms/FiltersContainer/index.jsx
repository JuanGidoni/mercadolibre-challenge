import { Link } from 'react-router-dom'

const FiltersContainer = ({ filters, className, textColor, setLoading }) => {
    return (

        <ul className={className}>
            {filters && filters.length > 0 ? filters.map(
                (v, i) => (
                    <Link key={i} to={`/categories/${v.id}`} className={textColor} > {v.name} </Link>
                )
            ) : 'No filters found'}
        </ul>
    )
}

export default FiltersContainer
