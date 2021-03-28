import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Product from '../../molecules/Product'

const Categories = ({ url, port, setProducts, setErrorMsg, products }) => {

    const { id } = useParams();

    const verifyCategory = async () => {
        try {
            const fetchCategory = await fetch(`${url}:${port}/v1/filter/${id}`)
            const results = await fetchCategory.json()
            setProducts(results)
        } catch (error) {
            setErrorMsg('Error fetching categories products or invalid category.')
        }
    }
    useEffect(() => {
        const getCategoryProducts = () => {
            verifyCategory()
        }
        return getCategoryProducts()
    }, [products])

    return (
        <div className="row pr-0 pl-0 w-100">
            {products && products.length > 0 ? products.map(
                (v, i) => (
                    <Link to={`/product/${v.id}`} key={i}>
                        <Product id={v.id} title={v.title} price={v.price} shipping={v.shipping} thumbnail={v.thumbnail} />
                    </Link>
                )
            ) : 'Products not found or error in the backend.'}
        </div>
    )
}

export default Categories
