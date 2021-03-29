import { useParams } from 'react-router-dom'
import Product from '../../molecules/Product'
import { useDataContext } from '../../settings/DataContext'

const Products = () => {
    
    const { products } = useDataContext()
    const { id } = useParams()

    return (
        <div className="row w-100 pr-0 pl-0">
            {products && products.length > 0 ? products.map(
                (v, i) => (
                    v.id === id ? <Product key={i} id={v.id} title={v.title} price={v.price} shipping={v.shipping} thumbnail={v.thumbnail} /> : false
                )
            ) : 'Products list not found or invalid id'}
        </div>
    )
}

export default Products
