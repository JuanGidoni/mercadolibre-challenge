const PriceBox = ({
    price, original_price, className, testId, full
}) => {

    const numberWithCommas = (x) => {
        if (!isNaN(x) && x % 1 !== 0) {
            return x
        } else if (!isNaN(x)) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        } else {
            return false
        }
    }

    const calcPorcentage = (original, offer) => {
        return ((original - offer) * 100 / original).toFixed(0)
    }

    return (
        <div className={className}>
            {
                original_price !== 0 && original_price > price ?
                    <div className="prices-box">
                        <div className="offer-of-the-day">
                            <p>
                                OFERTA DEL DIA
                            </p>
                        </div>
                        <p className="line-through smaller p-0 m-0">$ {numberWithCommas(original_price)}</p>
                        <div className="d-flex flex-fill justify-content-start align-items-center">
                            <p data-testid={testId} className="price">$ {numberWithCommas(price)}</p>
                            <p data-testid={testId} className="discount-price">{calcPorcentage(original_price, price)}% OFF</p>
                        </div>
                    </div> :
                    <div className="prices-box">
                        <div className="price">
                            <p data-testid={testId}>$ {numberWithCommas(price)}</p>
                            {full ?
                                <p className="m-0 p-0">
                                    <svg fill="#00a650" className="d-flex justify-content-center align-items-center" width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path fillRule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></svg>
                                </p>
                                : ''}
                        </div>
                    </div>
            }
        </div>
    )
}

export default PriceBox
