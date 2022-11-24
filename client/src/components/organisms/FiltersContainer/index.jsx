import Button from "../../atoms/Button";
import { useDataContext } from "../../settings/DataContext";

const FiltersContainer = ({ filters, className, textColor }) => {
  const { totalItems } = useDataContext();

  return (
    <ul className={className} data-testid="__test_filtersList">
      <div className="d-flex flex-column justify-content-center align-items-start">
        <p className="m-0 p-0">
          <strong>Total</strong>
        </p>
        <p className="smaller">{totalItems} productos</p>
      </div>
      {filters && filters.length > 0
        ? filters.map((v, i) => (
            <Button
              key={i}
              typeBtn="filtersClick"
              categoryId={v.id}
              className={
                textColor + " text-decoration-none btn p-0 m-0 w-100 text-left"
              }
              data-testid="__test_filtersLink"
            >
              {" "}
              {v.name}{" "}
            </Button>
          ))
        : "No filters found"}
    </ul>
  );
};

export default FiltersContainer;
