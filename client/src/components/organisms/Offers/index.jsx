import OffersHeader from '../../molecules/OffersHeader'
import OffersList from '../../molecules/OffersList'
import '../../templates/Offers.css'

const Offers = ({ offersData, title, subtitle }) => {
    return (
        <div className="container-fluid offers-box h-100">
            <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center align-items-center h-100">
                <OffersHeader title={title} subtitle={subtitle} className="pt-3 pb-3" />
                <OffersList className="d-flex justify-content-center align-items-center flex-fill h-100 offers-list" offersData={offersData && offersData.length > 0 ? offersData : 'No offers set'} />
            </div>
        </div>
    )
}

export default Offers
