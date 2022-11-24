import React from "react";
import { useDataContext } from "../../settings/DataContext";
import ProductList from "../../molecules/ProductList";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { fav } = useDataContext();

  return (
    <div>
      <p className="p-1 text-muted">Your favorite list</p>
      {fav && fav.length > 0 ? (
        <div className="container home w-100">
          <div className="row pl-0 pr-0">
            {fav.map((v, i) => {
              return (
                <Link
                  to={`/product/${v.id}`}
                  key={i}
                  className="col-12 col-md-4 col-lg-3 cursor-pointer text-decoration-none"
                >
                  <ProductList
                    id={v.id}
                    title={v.title}
                    price={v.price}
                    original_price={v.original_price ? v.original_price : 0}
                    shipping={v.shipping}
                    thumbnail={v.thumbnail}
                    sellerID={v.seller.id}
                    className="product w-100"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container home">No favorite list found...</div>
      )}
    </div>
  );
};

export default Favorites;
