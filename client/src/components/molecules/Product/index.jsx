import PriceBox from '../../atoms/PriceBox'
import Parragraph from '../../atoms/Parragraph'
import Image from '../../atoms/Image'
import '../../templates/Product.css'
import Button from '../../atoms/Button'
import { FaHeart } from 'react-icons/fa'

const Product = ({
    product, className, added
}) => {
    return (
        <div className={className} id={product.id} data-testid="__test_pId">
       <div className="add-favorite w-100 d-flex justify-content-end align-items-center">
            <Button typeBtn="addFav" className={`btn btn-fav fav-${added ? true : false}`} product_data={product} >
                <FaHeart />
            </Button>
        </div>
            <div className="w-100 h-100 d-flex flex-fill justify-content-center align-items-center bg-white">
                <div className="box h-100 w-100">
                    <Image src={product.thumbnail} alt={product.title} className="img-fluid" testId="__test_pImgUrl" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start h-100 w-100 py-3 px-2 px-md-0 py-md-0">
                    <PriceBox price={product.price} original_price={product.original_price} className="w-auto h-auto" testId="__test_pPrice" full={product.shipping.logistic_type === "fulfillment" ? true : false} />
                    <p className="small text-success" id="free-shipping">{product.shipping.free_shipping ? 'Envio Gratis' : ''}</p>
                    <div className="card-title text-muted">
                        <p className="text-muted p-0 mb-1 small">Detalle: </p>
                        <Parragraph titleType="h6" className="m-0 p-0 text-left" testId="__test_pTitle"> {product.title} </Parragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

