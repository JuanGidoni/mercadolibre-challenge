import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../atoms/Loader";
import Product from "../../molecules/Product";
import { useDataContext } from "../../settings/DataContext";

const ProductBox = () => {
  const { products, loading, fav, added, checkifFavExist } = useDataContext();
  const { id } = useParams();

  useEffect(() => {
    const renderProduct = (e) => {
      checkifFavExist(e);
    };
    return renderProduct(id);
  }, [id]);
  const Loader = loading && <Loader />;
  const showProductFav =
    fav &&
    fav.length > 0 &&
    fav.some((item) => item.id === id) &&
    fav.map(
      (vFav, iFav) =>
        vFav.id === id && (
          <Product
            added={added}
            key={iFav}
            product={vFav}
            className="product-only w-100 h-100 pb-5"
          />
        )
    );
  const showProduct =
    products &&
    products.length > 0 &&
    products.map(
      (v, i) =>
        v.id === id && (
          <Product
            added={added}
            key={i}
            product={v}
            className="product-only w-100 h-100 pb-5"
          />
        )
    );
  const checkProduct = showProduct ?? showProductFav;

  return (
    <div className="row w-100 pr-0 pl-0">
      {Loader ?? checkProduct ?? (
        <div className="not-found">Products not found.</div>
      )}
    </div>
  );
};

export default ProductBox;
