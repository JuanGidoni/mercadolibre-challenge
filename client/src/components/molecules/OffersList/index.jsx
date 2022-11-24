import Button from "../../atoms/Button";
import { useDataContext } from "../../settings/DataContext";

const OffersList = ({ offersData, className }) => {
  const { getResults, setLoading } = useDataContext();

  return (
    <div className={className}>
      {offersData && offersData.length > 0 ? (
        offersData.map((v, i) => (
          <Button
            key={i}
            icon={v.image_src}
            className="offer-button"
            setLoading={setLoading}
            getResults={getResults}
            testId="__test_offerlist"
          >
            {v.name}
          </Button>
        ))
      ) : (
        <p>No data set</p>
      )}
    </div>
  );
};

export default OffersList;
