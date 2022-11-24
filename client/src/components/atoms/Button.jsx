import { useHistory } from "react-router-dom";
import { useDataContext } from "../settings/DataContext";
import PropTypes from "prop-types";

const Button = ({
  children,
  className,
  icon,
  typeBtn,
  clickFunction,
  testId,
  product_data,
  categoryId,
}) => {
  const { fetchOffers, addFav, fetchFilters } = useDataContext();
  const history = useHistory();

  return icon && testId ? (
    <button
      className={className}
      onClick={() => fetchOffers(children, history)}
      data-testid={testId}
    >
      <img
        src={icon}
        className="offers-icon"
        alt={children}
        data-testid={`${testId}Img`}
      />
      {children}
    </button>
  ) : typeBtn === "withClick" && testId ? (
    <button className={className} onClick={clickFunction} data-testid={testId}>
      {children}
    </button>
  ) : typeBtn === "offerBtn" && testId ? (
    <button
      className={className}
      onClick={() => fetchOffers(children, history)}
      data-testid={testId}
    >
      {children}
    </button>
  ) : icon && typeBtn === "withClick" ? (
    <button
      className={className}
      onClick={() => fetchOffers(children, history)}
    >
      <img src={icon} className="offers-icon" alt={children} />
      {children}
    </button>
  ) : typeBtn === "withClick" ? (
    <button className={className} onClick={clickFunction}>
      {children}
    </button>
  ) : typeBtn === "addFav" ? (
    <button className={className} onClick={() => addFav(product_data, history)}>
      {children}
    </button>
  ) : typeBtn === "filtersClick" ? (
    <button
      className={className}
      onClick={() => fetchFilters(categoryId, history)}
    >
      {children}
    </button>
  ) : (
    <button className={className} onClick={clickFunction}>
      {children}
    </button>
  );
};

Button.propType = {
  categoryId: PropTypes.any,
  typeBtn: PropTypes.string,
  clickFunction: PropTypes.func,
  product_data: PropTypes.object,
};

export default Button;
