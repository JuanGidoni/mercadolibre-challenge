import PriceBox from '../../atoms/PriceBox'
import Parragraph from '../../atoms/Parragraph'
import Image from '../../atoms/Image'
import '../../templates/Product.css'

const Product = ({
    id, title, price, thumbnail, shipping, original_price
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
        <div className="product w-100" id={id} data-testid="__test_pId">
            <div className="card product-box">
                <div className="box">
                <Image src={thumbnail} alt={title} className="product-img" testId="__test_pImgUrl" />
                </div>
                <div className="card-body d-flex flex-column justify-content-end align-items-start">
                    <PriceBox price={price} original_price={original_price} className="h4 text-dark" testId="__test_pPrice"/>
                    <p className="small text-success" id="free-shipping">{shipping.free_shipping ? 'Envio Gratis' : ''}</p>
                    <div className="card-title text-muted">
                        <Parragraph titleType="h6" className="m-0 p-0" testId="__test_pTitle"> {formatString(title, 35)} </Parragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

