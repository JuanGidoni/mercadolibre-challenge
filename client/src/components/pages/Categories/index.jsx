import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../settings/DataContext'
import ProductsContainer from "../../organisms/ProductsContainer"
import FiltersContainer from "../../organisms/FiltersContainer"
import Loader from '../../atoms/Loader'

const Categories = () => {

    const { id } = useParams();
    const { products, filters, setLoading, verifyCategory, loading } = useDataContext()

    useEffect(() => {

        const verifyC = (id) => {
            verifyCategory(id)
        }

        return verifyC(id)

    }, [id, verifyCategory, setLoading])

    return (
        loading ? <Loader /> :
            <div className="row pr-0 pl-0 w-100">
                <div className="col-3 pr-0 pl-0">
                    <FiltersContainer filters={filters} className="d-none d-md-flex flex-column w-100 justify-content-center align-items-start" textColor="text-dark" />
                </div>

                <div className='col-9 pr-0 pl-0'>
                    <ProductsContainer products={products} />
                </div>

            </div>
    )
}

export default Categories
