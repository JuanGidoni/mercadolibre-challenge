import PriceBox from '../../atoms/PriceBox'
import Parragraph from '../../atoms/Parragraph'
import Image from '../../atoms/Image'
import '../../templates/Product.css'
import Button from '../../atoms/Button'
import { FaHeart } from 'react-icons/fa'

const Product = ({
    id, title, price, thumbnail, shipping, original_price, className, added
}) => {
    return (
        <div className={className} id={id} data-testid="__test_pId">
       <div className="add-favorite w-100 d-flex justify-content-end align-items-center">
            <Button typeBtn="addFav" className={`btn btn-fav fav-${added ? true : false}`} productId={id} >
                <FaHeart />
            </Button>
        </div>
            <div className="w-100 h-100 d-flex flex-fill justify-content-center align-items-center">
                <div className="box bg-white h-100 w-100">
                    <Image src={thumbnail} alt={title} className="product-img" testId="__test_pImgUrl" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start bg-white h-100 w-100 ">
                    <PriceBox price={price} original_price={original_price} className="w-auto h-auto" testId="__test_pPrice" />
                    <p className="small text-success" id="free-shipping">{shipping.free_shipping ? 'Envio Gratis' : ''}</p>
                    <div className="card-title text-muted">
                        <p className="text-muted p-0 mb-1 small">Detalle: </p>
                        <Parragraph titleType="h6" className="m-0 p-0 text-left" testId="__test_pTitle"> {title} </Parragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

