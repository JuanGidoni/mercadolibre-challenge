import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsContainer from "../../organisms/ProductsContainer"
import FiltersContainer from "../../organisms/FiltersContainer"
import Loader from '../../atoms/Loader'

const Categories = ({ products, setProducts, port, url, setErrorMsg, filters }) => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const verifyCategory = async (id) => {
            setLoading(true)
            try {
                const fetchCategory = await fetch(`${url}:${port}/v1/filter/${id}`)
                const results = await fetchCategory.json()
                setProducts(results)
                setLoading(false)
            } catch (error) {
                setErrorMsg('Error fetching categories products or invalid category.')
            }
        }
        const getCategoryProducts = () => {
            verifyCategory(id)
        }

        return getCategoryProducts()

    }, [id, port, setErrorMsg, setProducts, url])

    return (
        <div className="row pr-0 pl-0 w-100">

            <div className="col-3 pr-0 pl-0">
                <FiltersContainer filters={filters} setLoading={setLoading} className="d-none d-md-flex flex-column w-100 justify-content-center align-items-start" textColor="text-dark"  />
            </div>

            <div className='col-9 pr-0 pl-0'>
                {
                    loading ? <Loader /> : <ProductsContainer products={products} />
                }
            </div>

        </div>
    )
}

export default Categories
