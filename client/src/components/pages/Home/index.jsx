import Product from "../../molecules/Product"
import { Link } from 'react-router-dom'

const Home = ({
    products
}) => {

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

export default Home
