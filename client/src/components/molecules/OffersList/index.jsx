import Button from '../../atoms/Button'

const OffersList = ({ offersData, className }) => {
    return (
        <div className={className}>
            {offersData && offersData.length > 0 ? (
                offersData.map(
                    (v,i) => (
                        v.isDefault ? (
                            <Button key={i} icon={v.image_src} className='offer-button active'>
                            {v.name}
                        </Button>
                        ) : (
                            <Button key={i} icon={v.image_src} className='offer-button no-active'>
                            {v.name}
                        </Button>
                        )
                    )
                )
            ) :
            (
                <p>No data set</p>
            )}
        </div>
    )
}

export default OffersList
