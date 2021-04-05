import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../settings/DataContext'
import ProductsContainer from "../../organisms/ProductsContainer"
import FiltersContainer from "../../organisms/FiltersContainer"
import Loader from '../../atoms/Loader'

const Categories = () => {

    const { products, filters, verifyCategory, categoryLoading, setCategoryLoading } = useDataContext()
    const { id } = useParams();

    useEffect(() => {
        const verifyC = () => {
            setCategoryLoading(true)
            verifyCategory(id)
        }

        return verifyC()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        categoryLoading ? <Loader /> :
            <div className="row pr-0 pl-0 w-100">
                <div className="col-12 d-none d-lg-block col-lg-3 pr-0 pl-0">
                    <FiltersContainer filters={filters} className="d-none d-md-flex flex-column w-100 justify-content-center align-items-start" textColor="text-dark" />
                </div>

                <div className='col-12 col-lg-9 pr-0 pl-0'>
                    <ProductsContainer products={products} />
                </div>

            </div>
    )
}

export default Categories
