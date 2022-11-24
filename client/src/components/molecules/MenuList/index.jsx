import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDataContext } from "../../settings/DataContext";

const MenuList = ({ items, profile }) => {
  const { fav, formatLinksURL } = useDataContext();

  return (
    <div className="d-flex flex-fill flex-row p-1 justify-content-between">
      <div className="position"></div>
      <div className="buttons d-none d-md-block">
        {items && items.length > 0
          ? items.map((v, i) => (
              <Link
                key={i}
                to={`/${formatLinksURL(v)}`}
                className="btn btn-menu-meli"
              >
                {v}
              </Link>
            ))
          : "MenuList is empty"}
      </div>
      <div className="account d-none d-md-flex">
        <Link to="/profile" className="btn btn-menu-meli">
          {profile}
        </Link>
        <Link
          to="/favorites"
          className={`btn btn-fav d-flex flex-fill justify-content-center align-items-center ${
            fav && fav.length > 0 ? "fav-true" : "fav-false"
          }`}
        >
          <FaHeart />
          <div className="ml-1">{fav && fav.length ? fav.length : ""}</div>
        </Link>
      </div>
    </div>
  );
};

export default MenuList;
