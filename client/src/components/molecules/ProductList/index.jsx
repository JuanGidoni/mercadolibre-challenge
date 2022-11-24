import PriceBox from "../../atoms/PriceBox";
import Parragraph from "../../atoms/Parragraph";
import Image from "../../atoms/Image";
import "../../templates/Product.css";
import { formatString } from "../../../utils/formatters";

const ProductList = ({
  id,
  title,
  price,
  thumbnail,
  shipping,
  original_price,
  className,
}) => {
  return (
    <div className={className} id={id} data-testid="__test_pId">
      <div className="card product-box">
        <div className="box">
          <Image
            src={thumbnail}
            alt={title}
            className="product-img"
            testId="__test_pImgUrl"
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-end align-items-start">
          <PriceBox
            price={price}
            original_price={original_price}
            className="w-auto h-auto"
            testId="__test_pPrice"
            full={shipping.logistic_type === "fulfillment" ? true : false}
          />
          <p className="small text-success" id="free-shipping">
            {shipping.free_shipping && "Envio Gratis"}
          </p>
          <div className="card-title text-muted">
            <Parragraph
              titleType="h6"
              className="m-0 p-0 text-left"
              testId="__test_pTitle"
            >
              {formatString(title, 45)}
            </Parragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
