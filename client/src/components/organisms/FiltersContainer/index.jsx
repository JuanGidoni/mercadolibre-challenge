import { Link } from 'react-router-dom'

const FiltersContainer = ({ filters, className, textColor, onClick }) => {
    return (

        <ul className={className}>
            {filters && filters.length > 0 ? filters.map(
                (v, i) => (
                    <Link key={i} to={`/categories/${v.id}`} className={textColor} onClick={onClick ? onClick : () => (false)} > {v.name} </Link>
                )
            ) : 'No filters found'}
        </ul>
    )
}

export default FiltersContainer
