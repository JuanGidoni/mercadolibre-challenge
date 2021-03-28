import PriceBox from '../../atoms/PriceBox'
import Parragraph from '../../atoms/Parragraph'
import Image from '../../atoms/Image'
import '../../templates/Product.css'

const Product = ({
    id, title, price, thumbnail, shipping,
}) => {
    // function to format the string by length size then add ... to cut it
    function formatString(text, length) {
        if (text == null) {
            return "";
        }
        if (text.length <= length) {
            return text;
        }
        text = text.substring(0, length);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "...";
    }

    return (
        <div className="product pl-0 pr-0">
            <div className="card h-100">
                <Image src={thumbnail} alt={title} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-end align-items-start">
                    <PriceBox price={price} original_price={price.original_price} discount={price.discount} currency={price.currency} className="h4 text-dark" />
                    <p className="small text-success">{shipping.free_shipping ? 'Envio Gratis' : ''}</p>
                    <div className="card-title text-muted">
                        <Parragraph titleType="h6" className="m-0 p-0"> {formatString(title, 35)} </Parragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

