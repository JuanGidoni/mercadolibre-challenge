const PriceBox = ({
    price, original_price, className, testId
}) => {

    function numberWithCommas(x) {
        if (!isNaN(x) && x % 1 !== 0) {
            return x
        } else if (!isNaN(x)) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        } else {
            return false
        }
    }
    /* 
    function test(x, expect) {
        const result = numberWithCommas(x)
        const pass = result === expect
        console.log(`${pass ? "✓" : "ERROR ====>"} ${x} => ${result}`)
 
    } */

    function calcPorcentage(original, offer) {
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
                    </div>
                </div> 
            }
        </div>
    )
}

export default PriceBox
