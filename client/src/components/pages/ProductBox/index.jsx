import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../atoms/Loader'
import Product from '../../molecules/Product'
import { useDataContext } from '../../settings/DataContext'

const ProductBox = () => {

    const { products, loading, fav, added, setAdded } = useDataContext()
    const { id } = useParams()


    useEffect(() => {
        const checkifFavExist = (id) => {
            let idFormat = id.toString();

            if(fav && fav.length > 0){
                if(fav.includes(idFormat)){
                    return setAdded(true)
                }else {
                    return setAdded(false)
                }
            }else{
                setAdded(false)
            }
        }

        const renderProduct = (e) => {
            checkifFavExist(e)
        }
        return renderProduct(id)
    }, [id])

    return (
        <div className="row w-100 pr-0 pl-0">
            {
                loading ? <Loader /> :

                    products && products.length > 0 ? products.map(
                        (v, i) => (
                            v.id === id ? <Product added={added} key={i} id={v.id} idFromParams={id} title={v.title} price={v.price} shipping={v.shipping} thumbnail={v.thumbnail} className="product-only w-100 h-auto" /> : false
                        )
                    ) : 'Products list not found or invalid id'
            }
        </div>
    )
}

export default ProductBox
