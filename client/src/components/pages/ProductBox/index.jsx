import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../atoms/Loader'
import Product from '../../molecules/Product'
import { useDataContext } from '../../settings/DataContext'

const ProductBox = () => {


    // declare destructuring functions/const from DataContext
    const { products, loading, fav, added, checkifFavExist } = useDataContext()
    // declare id from useParams (from url parameters from react router dom)
    const { id } = useParams()


    useEffect(() => {
        const renderProduct = (e) => {
            // check if Favorite List exist (to set added or !added to the product)
            checkifFavExist(e)
        }
        return renderProduct(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className="row w-100 pr-0 pl-0">
            {
                // if loading render Loader else render favs else render products else product not found
                loading ? <Loader /> :

                fav && fav.length > 0 && fav.some(item => item.id === id) ? fav.map(
                    (vFav, iFav) => (
                        vFav.id === id ? <Product added={added} key={iFav} product={vFav} className="product-only w-100 h-100 pb-5" />
                            : false
                    )
                ) : products && products.length > 0 ? products.map(
                        (v, i) => (
                            v.id === id ? <Product added={added} key={i} product={v} className="product-only w-100 h-100 pb-5" />
                                :  false
                        )
                    )  : <div className="not-found">Products not found.</div>
            }
        </div>
    )
}

export default ProductBox
