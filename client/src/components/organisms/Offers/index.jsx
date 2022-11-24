import OffersHeader from "../../molecules/OffersHeader";
import OffersList from "../../molecules/OffersList";
import { useDataContext } from "../../settings/DataContext";
import "../../templates/Offers.css";

const Offers = () => {
  const { meLiShortcuts, meLiData } = useDataContext();
  return (
    <div className="container-fluid offers-box h-100">
      <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center align-items-center h-100">
        <OffersHeader
          title={meLiData.title}
          subtitle={meLiData.subtitle}
          className="pt-3 pb-3 d-none d-lg-block"
        />
        <OffersList
          className="d-flex flex-fill flex-wrap justify-content-center h-auto align-items-center offers-list w-100"
          offersData={
            meLiShortcuts && meLiShortcuts.length > 0
              ? meLiShortcuts
              : "No offers set"
          }
        />
      </div>
    </div>
  );
};

export default Offers;
